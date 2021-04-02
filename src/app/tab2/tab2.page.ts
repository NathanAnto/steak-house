import { Component, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { Steak } from '../steak';
import { SteakService } from '../steak.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  steaks: Steak[] = [];
  
  constructor(private steakService: SteakService, private cartService: CartService, public alertController: AlertController) {}

  ngOnInit() {
    this.getSteaks();
  }

  getSteaks(): void {    
    this.steakService.getSteaks().subscribe(steaks => this.steaks = steaks);
  }

  async addSteak(steak: Steak) {

    // message box to confirm
    const alert = await this.alertController.create({
      header: "Steak added !",
      message: 'The ' + steak.name + ' has succefully been added to your cart.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            // add steak to cart
            this.cartService.addSteaks(steak);
          }
        }
      ]
    });

    await alert.present();
  }
}
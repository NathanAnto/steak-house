import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { Steak } from '../steak';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  steaksInCart: Steak[] = [];

  constructor(private cartService: CartService, public alertController: AlertController) {}

  ngOnInit() {
    this.getSteaks();
  }

  getSteaks(): void {    
    this.cartService.getSteaks().subscribe(steaks => this.steaksInCart = steaks);
  }

  async removeSteak(steak: Steak, steakId: number): Promise<void> {

    // message box to confirm
    const alert = await this.alertController.create({
      header: 'Are you sure ?',
      message: 'The ' + steak.name + ' will be removed from your cart !',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            // add steak to cart
            this.cartService.removeSteaks(steakId);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}

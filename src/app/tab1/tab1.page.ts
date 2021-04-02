import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Steak } from '../steak';
import { SteakService } from '../steak.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  steaks: Steak[];
  steakForm: FormGroup;
  newSteak: Steak = {
    id: 0,
    name: "",
    cooking: "",
    price : 0
  };

  constructor(private steakService: SteakService, private _fb: FormBuilder, public alertController: AlertController) {}
  ngOnInit(): void {    
    this.steakForm = this._fb.group({
    name: ['', Validators.required],
    cooking: [''],
    price: ['', Validators.required]
  });
  }

  async createSteak() {
    const alert = await this.alertController.create({
      header: "Steak created !",
      message: 'The steak has succefully been created.',
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
            // add steak
            // get form input
            this.newSteak = this.steakForm.value;

            // get steaks
            this.steakService.getSteaks().subscribe(steaks => this.steaks = steaks);
          
            // make new steak id the length of the array
            this.newSteak.id = this.steaks.length+1;
            console.log(this.newSteak)

            // add to the array
            this.steakService.addSteak(this.newSteak);
          }
        }
      ]
    });

    await alert.present();
  }
}
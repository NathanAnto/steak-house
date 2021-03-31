import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private steakService: SteakService, private _fb: FormBuilder) {}
  ngOnInit(): void {    
    this.steakForm = this._fb.group({
    name: ['', Validators.required],
    cooking: [''],
    price: ['', Validators.required]
  });
  }

  createSteak() {
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

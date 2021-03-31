import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Steak } from '../steak';
import { SteakService } from '../steak.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  steaks: Array<Steak>;
  newSteak: Steak;

  constructor(steakService: SteakService) {
    
  }

  createSteak(newSteak: NgForm) {
    this.newSteak = newSteak.value;
  }
}

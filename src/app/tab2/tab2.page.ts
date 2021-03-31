import { Component } from '@angular/core';
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
  
  constructor(private steakService: SteakService, private cartService: CartService) {}

  ngOnInit() {
    this.getSteaks();
  }

  getSteaks(): void {    
    this.steakService.getSteaks().subscribe(steaks => this.steaks = steaks);
  }

  addSteak(steak: Steak): void {
    this.cartService.addSteaks(steak);
  }
}

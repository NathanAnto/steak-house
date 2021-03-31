import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Steak } from '../steak';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  steaksInCart: Steak[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getSteaks();
  }

  getSteaks(): void {    
    this.cartService.getSteaks().subscribe(steaks => this.steaksInCart = steaks);
  }

  removeSteak(steakId: number): void {
    this.cartService.removeSteaks(steakId);
  }

}

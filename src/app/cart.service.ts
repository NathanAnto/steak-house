import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Steak } from './steak';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  steaksInCart: Steak[] = [];
  constructor() { }

  getSteaks(): Observable<Array<Steak>> {
    return of(this.steaksInCart);
  }

  addSteaks(newSteak: Steak) {
    this.steaksInCart.push(newSteak);
    console.log("Steak added to cart");
  }

  removeSteaks(id: number) {
    // delete this.steaksInCart[id-1];
    this.steaksInCart.splice(id, 1);
    console.log("Steak removed");
  }
}

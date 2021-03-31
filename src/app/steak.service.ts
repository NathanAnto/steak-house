import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { STEAKS } from './mock-steaks';
import { Steak } from './steak';

@Injectable({
  providedIn: 'root'
})
export class SteakService {

  steaks: Steak[] = [];
  
  constructor() { }

  getSteaks(): Observable<Steak[]> {
    const steaks = of(STEAKS);
    return steaks;
  }

  addSteak(newSteak: Steak) {
    // let steaks = of(STEAKS);
    STEAKS.push(newSteak);
    this.steaks = STEAKS;
  }
}

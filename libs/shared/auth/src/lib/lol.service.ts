import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LolService {
  constructor() {}

  private _name = new BehaviorSubject('');
  readonly name$ = this._name.asObservable();

  addName(name: string) {
    this._name.next(name);
  }
}

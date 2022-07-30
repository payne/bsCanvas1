import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BsPipeService {
  subject = new BehaviorSubject(0);
  constructor() { 
  }

  send(n: number) {
	  this.subject.next(n);
  }
  
}

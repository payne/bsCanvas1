import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RectangleCommand } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class BsPipeService {
  rc: RectangleCommand = { lx: 42, by: 88, command: 'noop' };
  subject = new BehaviorSubject(this.rc);
  constructor() { 
  }

  send(n: RectangleCommand) {
	  this.subject.next(n);
  }
  
}

export { RectangleCommand };


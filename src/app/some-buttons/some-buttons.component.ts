import { Component, OnInit } from '@angular/core';
// import { RectangleCommand } from '../data-types';
// import { BsPipeService } from '../bs-pipe.service';
import { RectangleCommand, BsPipeService } from '../bs-pipe.service';

@Component({
  selector: 'app-some-buttons',
  templateUrl: './some-buttons.component.html',
  styleUrls: ['./some-buttons.component.scss']
})
export class SomeButtonsComponent implements OnInit {
  bCount = 0;

  constructor(private bsPipe: BsPipeService) { }

  ngOnInit(): void {
  }

  redCircle() {
    console.log(`redCircle will do stuff.`);
    // this.bsPipe.send(this.bCount++);
    const rCommand: RectangleCommand = { lx: 42, by: 72, command: 'draw' };
    console.log(`About to send:`);
    console.log(rCommand);
    this.bsPipe.send(rCommand);
  }

}

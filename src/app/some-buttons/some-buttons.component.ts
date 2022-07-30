import { Component, OnInit } from '@angular/core';
import { BsPipeService } from '../bs-pipe.service';

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
    this.bsPipe.send(this.bCount++);
  }

}

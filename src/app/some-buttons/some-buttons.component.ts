import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-buttons',
  templateUrl: './some-buttons.component.html',
  styleUrls: ['./some-buttons.component.scss']
})
export class SomeButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redCircle() {
    console.log(`redCircle will do stuff.`);
  }

}

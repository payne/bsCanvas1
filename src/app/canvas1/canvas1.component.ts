import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas1',
  templateUrl: './canvas1.component.html',
  styleUrls: ['./canvas1.component.scss']
})
export class Canvas1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  const canvas:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas2d')
	  console.log(canvas);
	  if (canvas) {
            const ctx = canvas.getContext('2d');
	    if (ctx) {
              ctx.fillStyle = 'green';
              ctx.fillRect(10, 10, 150, 100);
	    }
	  }
  }

}

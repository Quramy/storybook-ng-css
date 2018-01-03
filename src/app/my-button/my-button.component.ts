import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  // styleUrls: ['./my-button.component.css'],
  styles: [`
    p {
      color: red;
    }
  `],
})
export class MyButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

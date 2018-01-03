import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  // use `styleUrls`: styles are not applied...
  // styleUrls: ['./my-button.component.css'],
  // use `styles`: red color applied
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

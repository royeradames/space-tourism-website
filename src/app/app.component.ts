import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /* keep track what is the current displaying page */
  currentPage = {
    isHome: true,
    isDestination: false,
    isCrew: false,
    isTechnology: false,
  };
  constructor() {}
}

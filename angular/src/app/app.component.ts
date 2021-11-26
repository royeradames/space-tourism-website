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
  constructor(private location: Location, private router: Router) {
    /* check what is the current render page */
    router.events.subscribe((val) => {
      const thereIsAPath = location.path() != '';
      const defaultPath = '/';
      const currentPath = location.path();
      thereIsAPath
        ? this.changePageBackground(currentPath)
        : this.changePageBackground(defaultPath);
    });
  }

  /* update currentPage base on page change*/
  changePageBackground(page: string) {
    const HOME = '/';
    const DESTINATION = '/destination';
    const CREW = '/crew';
    const TECHNOLOGY = '/technology';
    console.log('event');
    switch (page) {
      case HOME:
        this.currentPage = {
          isHome: true,
          isDestination: false,
          isCrew: false,
          isTechnology: false,
        };
        break;
      case DESTINATION:
        this.currentPage = {
          isHome: false,
          isDestination: true,
          isCrew: false,
          isTechnology: false,
        };
        break;
      case CREW:
        this.currentPage = {
          isHome: false,
          isDestination: false,
          isCrew: true,
          isTechnology: false,
        };
        break;
      case TECHNOLOGY:
        this.currentPage = {
          isHome: false,
          isDestination: false,
          isCrew: false,
          isTechnology: true,
        };
        break;

      default:
        this.currentPage = {
          isHome: true,
          isDestination: false,
          isCrew: false,
          isTechnology: false,
        };
        break;
    }
  }
}

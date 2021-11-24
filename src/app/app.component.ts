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
}

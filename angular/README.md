# Space tourism website
Space tourism is human space travel for recreational purposes. There are several different types of space tourism, including orbital, suborbital, and lunar space tourism.

Choose us for this adventure. See the places to explore. Please get to know the crew and the technologies that make it possible.

## Table of contents

- [Space tourism website](#space-tourism-website)
  - [Table of contents](#table-of-contents)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Highlights](#highlights)
      - [Router](#router)
      - [Dynamic page class base on the url](#dynamic-page-class-base-on-the-url)
      - [String interpolation |  | Event handling](#string-interpolation----event-handling)
      - [Attribute binding](#attribute-binding)
      - [Event handling](#event-handling)
  - [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information
### Screenshot

![Live website](../readme-assets/readme-assets/../space-tourism.gif)

### Links

- Live Site URL: [Angular front-end](https://royer-space-tourism.vercel.app/)

## My process
### Built with
- Semantic HTML5 markup
- SASS
- CSS Modules
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Angular](https://angular.io/) - JS library
### Highlights
#### Router
```html
<main
  class="page"
  [ngClass]="{
    'page-home': currentPage.isHome,
    'page-destination': currentPage.isDestination,
    'page-crew': currentPage.isCrew,
    'page-technology': currentPage.isTechnology
  }"
>
  <app-header></app-header>
  <router-outlet></router-outlet>
</main>
```
```ts
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'technology', component: TechnologyComponent },
];
@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
})

```
#### Dynamic page class base on the url
```html
[ngClass]="{
    'page-home': currentPage.isHome,
    'page-destination': currentPage.isDestination,
    'page-crew': currentPage.isCrew,
    'page-technology': currentPage.isTechnology
  }"
```
```ts
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
```
#### String interpolation |  | Event handling
```html
<article class="technology">
  <h1 class="technology-title">
    <span class="technology-title-number">03</span> {{ title }}
  </h1>
  
  <h2 class="technology-name">
    <span class="technology-name-label">THE TERMINOLOGY...</span
    >{{ technology.name }}
  </h2>

  <P class="technology-bio">{{ technology.bio }}</P>
</article>

```
```ts
export class TechnologyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'SPACE LAUNCH 101';

  technology = {
    name: 'LAUNCH VEHICLE',
    bio: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
    carry a payload from Earth's surface to space, usually to Earth orbit or
    beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing
    150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    imgLandscape: 'assets/technology/image-launch-vehicle-landscape.jpg',
    imgPortrait: 'assets/technology/image-launch-vehicle-portrait.jpg',
  };
```
#### Attribute binding
```html
<picture class="technology-img">
  <source media="(min-width: 1440px)" [srcset]="technology.imgPortrait" />
  <img [src]="technology.imgLandscape" [alt]="technology.name" />
</picture>
```
#### Event handling
```html
<nav class="technology-list">
  <a (click)="getTechInfo('vehicle')">1</a>
  <a (click)="getTechInfo('spaceport')">2</a>
  <a (click)="getTechInfo('capsule')">3</a>
</nav>
```
## Author

- Website - [Royer Adames](https://www.royeradames.com)
- LinkedIn - [@royeradames](https://www.linkedin.com/in/royer-adames/)

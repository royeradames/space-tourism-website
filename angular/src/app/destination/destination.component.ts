import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  /* fill page with destination data*/
  destination = {
    name: 'MOON',
    message: `See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11 landing
          sites.`,
    distance: '384,400 km',
    time: '3 DAYS',
    img: 'assets/destination/image-moon.webp',
  };

  /* change page data base on list selection */
  getPlanetInfo(planetName: string) {
    switch (planetName) {
      case 'moon':
        this.destination = {
          name: 'MOON',
          message: `See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11 landing
          sites.`,
          distance: '384,400 km',
          time: '3 DAYS',
          img: 'assets/destination/image-moon.webp',
        };
        break;
      case 'mars':
        this.destination = {
          name: 'MARS',
          message: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
          distance: '225 MIL. km',
          time: '9 MONTHS',
          img: 'assets/destination/image-mars.webp',
        };
        break;
      case 'europa':
        this.destination = {
          name: 'EUROPA',
          message: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
          distance: '628 MIL. km',
          time: '3 YEARS',
          img: 'assets/destination/image-europa.webp',
        };
        break;
      case 'titan':
        this.destination = {
          name: 'Titan',
          message: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
          distance: '1.6 BIL. km',
          time: '7 YEARS',
          img: 'assets/destination/image-titan.webp',
        };
        break;

      default:
        this.destination = {
          name: 'MOON',
          message: `See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11 landing
          sites.`,
          distance: '384,400 km',
          time: '3 DAYS',
          img: 'assets/destination/image-moon.webp',
        };
        break;
    }
  }
}

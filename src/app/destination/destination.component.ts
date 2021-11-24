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
}

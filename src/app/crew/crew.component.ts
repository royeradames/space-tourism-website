import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  /* initial crew page data */
  position = 'COMMANDER';
  name = 'Douglas Hurley';
  bio = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
    and former NASA astronaut. He launched into space for the third time as
    commander of Crew Dragon Demo-2.`;
  img = 'assets/crew/image-douglas-hurley.webp';
}

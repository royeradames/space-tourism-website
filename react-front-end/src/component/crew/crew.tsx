import React, { useState } from 'react'

export default function Crew() {
    /* initial crew page data */
    const pageData = {
        position: 'COMMANDER',
        name: 'Douglas Hurley',
        bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
    and former NASA astronaut. He launched into space for the third time as
    commander of Crew Dragon Demo-2.`,
        img: 'assets/crew/image-douglas-hurley.webp',
    }
    const [page, setPage] = useState(pageData)
    /* change template data base on list click */
  getCrewInfo(crewMember: string) {
    switch (crewMember) {
      case 'commander':
        this.position = 'COMMANDER';
        this.name = 'Douglas Hurley';
        this.bio = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
          and former NASA astronaut. He launched into space for the third time as
          commander of Crew Dragon Demo-2.`;
        this.img = 'assets/crew/image-douglas-hurley.webp';
        break;
      case 'specialist':
        this.position = 'Mission Specialist';
        this.name = 'MARK SHUTTLEWORTH';
        this.bio = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`;
        this.img = 'assets/crew/image-mark-shuttleworth.webp';
        break;
      case 'pilot':
        this.position = 'PILOT';
        this.name = 'Victor Glover';
        this.bio = `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`;
        this.img = 'assets/crew/image-victor-glover.webp';
        break;
      case 'engineer':
        this.position = 'Flight Engineer';
        this.name = 'Anousheh Ansari';
        this.bio = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`;
        this.img = 'assets/crew/image-anousheh-ansari.webp';
        break;

      default:
        this.position = 'COMMANDER';
        this.name = 'Douglas Hurley';
        this.bio = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
          and former NASA astronaut. He launched into space for the third time as
          commander of Crew Dragon Demo-2.`;
        this.img = 'assets/crew/image-douglas-hurley.webp';
        break;
    }
  }
    return (
        <article class="crew">
  <h1 class="crew-title"><span>02 </span>MEET YOUR CREW</h1>

  <img [src]="img" [alt]="name" class="crew-img" />

  <nav class="crew-list">
    <a (click)="getCrewInfo('commander')"></a>
    <a (click)="getCrewInfo('specialist')"></a>
    <a (click)="getCrewInfo('pilot')"></a>
    <a (click)="getCrewInfo('engineer')"></a>
  </nav>

  <h2 class="crew-position">{{ position }}</h2>
  <h3 class="crew-name">{{ name }}</h3>

  <P class="crew-bio">{{ bio }}</P>
</article>
    )
}




  

  
}

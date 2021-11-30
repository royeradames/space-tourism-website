import React, { useState } from 'react'

/* images */
import commander from '../../assets/crew/image-douglas-hurley.webp'
import specialist from '../../assets/crew/image-mark-shuttleworth.webp'
import pilot from '../../assets/crew/image-victor-glover.webp'
import engineer from '../../assets/crew/image-anousheh-ansari.webp'

export default function Crew() {
    /* initial crew page data */
    const pageData = {
        position: 'COMMANDER',
        name: 'Douglas Hurley',
        bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
    and former NASA astronaut. He launched into space for the third time as
    commander of Crew Dragon Demo-2.`,
        img: commander,
    }
    const [page, setPage] = useState(pageData)
    /* change template data base on list click */
  const getCrewInfo = (crewMember: string) => {
    switch (crewMember) {
      case 'commander':
        setPage({
            position: 'COMMANDER',
            name: 'Douglas Hurley',
            bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
          and former NASA astronaut. He launched into space for the third time as
          commander of Crew Dragon Demo-2.`,
            img: commander,
        })
        break;
      case 'specialist':
        setPage({
            position: 'Mission Specialist',
            name: 'MARK SHUTTLEWORTH',
            bio: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
            img: specialist,
        })
        break;
      case 'pilot':
        setPage({
            position: 'PILOT',
            name: 'Victor Glover',
            bio: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`,
            img: pilot,
        })
        break;
      case 'engineer':
          setPage({
            position: 'Flight Engineer',
            name: 'Anousheh Ansari',
            bio: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`,
            img: engineer
          })
        break;

      default:
        setPage({
            position: 'COMMANDER',
            name: 'Douglas Hurley',
            bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
          and former NASA astronaut. He launched into space for the third time as
          commander of Crew Dragon Demo-2.`,
            img: commander,
        })
        break;
    }
  }
    return (
        <article class="crew">
  <h1 class="crew-title"><span>02 </span>MEET YOUR CREW</h1>

  <img src={page.img} alt={page.name} class="crew-img" />

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
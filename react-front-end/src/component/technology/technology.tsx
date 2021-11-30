import React, { useState } from 'react'

export default function technology() {
    const [title, setTitle] = useState("SPACE LAUNCH 101")
  const technology = {
    name: 'LAUNCH VEHICLE',
    bio: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
    carry a payload from Earth's surface to space, usually to Earth orbit or
    beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing
    150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    imgLandscape: 'assets/technology/image-launch-vehicle-landscape.jpg',
    imgPortrait: 'assets/technology/image-launch-vehicle-portrait.jpg',
  };
    //   use state technology
  const [tech, setTech] = useState(technology);

  getTechInfo(techName: String) {
    switch (techName) {
      case 'vehicle':
          setTech({
            name: 'LAUNCH VEHICLE',
            bio: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
            imgLandscape: 'assets/technology/image-launch-vehicle-landscape.jpg',
            imgPortrait: 'assets/technology/image-launch-vehicle-portrait.jpg',
          })
        break;
      case 'spaceport':
            setTech({
                name: 'SPACEPORT',
                bio: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
                imgLandscape: 'assets/technology/image-spaceport-landscape.jpg',
                imgPortrait: 'assets/technology/image-spaceport-portrait.jpg',
            })
        break;
      case 'capsule':
            setTech({
                name: 'CAPSULE',
                bio: `A capsule is a small, spherical container that is used to transport a payload from one location to another. The payload is usually a single piece of material, such as a piece of paper, a piece of plastic, or a small metal object. Capsules are often used to transport small objects, such as a small rocket, to a destination.`,
                imgLandscape: 'assets/technology/image-capsule-landscape.jpg',
                imgPortrait: 'assets/technology/image-capsule-portrait.jpg',
            })
        break;

      default:
        setTech({
            name: 'LAUNCH VEHICLE',
            bio: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
            imgLandscape: 'assets/technology/image-launch-vehicle-landscape.jpg',
            imgPortrait: 'assets/technology/image-launch-vehicle-portrait.jpg',
          })
        break;
    }
  }
    return (
        <article class="technology">
  <h1 className="technology-title">
    <span className="technology-title-number">03</span> {{ title }}
  </h1>

  <picture className="technology-img">
    <source media="(min-width: 1440px)" [srcset]="technology.imgPortrait" />
    <img [src]="technology.imgLandscape" [alt]="technology.name" />
  </picture>

  <nav className="technology-list">
    <a (click)="getTechInfo('vehicle')">1</a>
    <a (click)="getTechInfo('spaceport')">2</a>
    <a (click)="getTechInfo('capsule')">3</a>
  </nav>

  <h2 className="technology-name">
    <span className="technology-name-label">THE TERMINOLOGY...</span
    >{{ technology.name }}
  </h2>

  <P className="technology-bio">{{ technology.bio }}</P>
</article>
    )
}




  

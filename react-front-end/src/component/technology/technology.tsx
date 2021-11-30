import React from 'react'

export default function technology() {
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

  getTechInfo(techName: string) {
    switch (techName) {
      case 'vehicle':
        this.technology.name = 'LAUNCH VEHICLE';
        this.technology.bio = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
          carry a payload from Earth's surface to space, usually to Earth orbit or
          beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing
          150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
        this.technology.imgLandscape =
          'assets/technology/image-launch-vehicle-landscape.jpg';
        this.technology.imgPortrait =
          'assets/technology/image-launch-vehicle-portrait.jpg';
        break;
      case 'spaceport':
        this.technology.name = 'SPACEPORT';
        this.technology.bio = `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`;
        this.technology.imgLandscape =
          'assets/technology/image-spaceport-landscape.jpg';
        this.technology.imgPortrait =
          'assets/technology/image-spaceport-portrait.jpg';
        break;
      case 'capsule':
        this.technology.name = 'SPACE CAPSULE';
        this.technology.bio = `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where
  you'll spend your time during the flight. It includes a space gym, cinema, and
  plenty of other activities to keep you entertained.`;
        this.technology.imgLandscape =
          'assets/technology/image-space-capsule-landscape.jpg';
        this.technology.imgPortrait =
          'assets/technology/image-space-capsule-portrait.jpg';
        break;

      default:
        this.technology.name = 'LAUNCH VEHICLE';
        this.technology.bio = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
          carry a payload from Earth's surface to space, usually to Earth orbit or
          beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing
          150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
        this.technology.imgLandscape =
          'assets/technology/image-launch-vehicle-landscape.jpg';
        this.technology.imgPortrait =
          'assets/technology/image-launch-vehicle-portrait.jpg';
        break;
    }
  }
    return (
        <article class="technology">
  <h1 class="technology-title">
    <span class="technology-title-number">03</span> {{ title }}
  </h1>

  <picture class="technology-img">
    <source media="(min-width: 1440px)" [srcset]="technology.imgPortrait" />
    <img [src]="technology.imgLandscape" [alt]="technology.name" />
  </picture>

  <nav class="technology-list">
    <a (click)="getTechInfo('vehicle')">1</a>
    <a (click)="getTechInfo('spaceport')">2</a>
    <a (click)="getTechInfo('capsule')">3</a>
  </nav>

  <h2 class="technology-name">
    <span class="technology-name-label">THE TERMINOLOGY...</span
    >{{ technology.name }}
  </h2>

  <P class="technology-bio">{{ technology.bio }}</P>
</article>
    )
}




  

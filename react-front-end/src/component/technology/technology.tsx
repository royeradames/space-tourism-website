import React, { useState } from 'react'
import styles from './technology.module.scss'
/* images */
// import vehicle images
import vehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import vehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg"
// import spaceport images
import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg"
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg"
// import capsule images
import capsuleLandscape from "../../assets/technology/image-capsule-landscape.jpg"
import capsulePortrait from "../../assets/technology/image-capsule-portrait.jpg"

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

//   define the name of the technology
    const techNames = ["vehicle", "spaceport", "capsule"];
  
  const getTechInfo = (techName: String) => {
    switch (techName) {
      case 'vehicle':
          setTech({
            name: 'LAUNCH VEHICLE',
            bio: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
            imgLandscape: vehicleLandscape,
            imgPortrait: vehiclePortrait,
          })
        break;
      case 'spaceport':
            setTech({
                name: 'SPACEPORT',
                bio: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
                imgLandscape: spaceportLandscape,
                imgPortrait: spaceportPortrait,
            })
        break;
      case 'capsule':
            setTech({
                name: 'CAPSULE',
                bio: `A capsule is a small, spherical container that is used to transport a payload from one location to another. The payload is usually a single piece of material, such as a piece of paper, a piece of plastic, or a small metal object. Capsules are often used to transport small objects, such as a small rocket, to a destination.`,
                imgLandscape: capsuleLandscape,
                imgPortrait: capsulePortrait,
            })
        break;

      default:
        case 'vehicle':
          setTech({
            name: 'LAUNCH VEHICLE',
            bio: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
            imgLandscape: vehicleLandscape,
            imgPortrait: vehiclePortrait,
          })
        break;
    }
  }
    return (
        <article className={styles.["technology"]}>
  <h1 className={styles["technology-title"]}>
    <span className={styles["technology-title-number"]}>03</span> {title}
  </h1>

  <picture className={styles["technology-img"]}>
    <source media="(min-width: 1440px)" [srcset]="technology.imgPortrait" />
    <img [src]="technology.imgLandscape" [alt]="technology.name" />
  </picture>

  <nav className={styles["technology-list"]}>
    <a onClick={() => getTechInfo(techNames[0])}>1</a>
    <a onClick={() => getTechInfo(techNames[1])}>2</a>
    <a onClick={() => getTechInfo(techNames[2])}>3</a>
  </nav>

  <h2 className={styles["technology-name"]}>
    <span className={styles["technology-name-label"]}>THE TERMINOLOGY...</span
    >{tech.name }
  </h2>

  <p className={styles["technology-bio"]}>{tech.bio }</p>
</article>
    )
}




  

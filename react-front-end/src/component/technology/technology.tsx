import React, { useEffect, useState } from "react";
import styles from "./technology.module.scss";
import { useQuery, gql } from "@apollo/client";

/* images */
// import vehicle images
import vehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
// import spaceport images
import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
// import capsule images
import capsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import Spinner from "../spinner/spinner";
import ErrorHandler from "../errorHandler/errorHandler";

export interface TechnologyData {
  name: string;
  bio: string;
  imgLandscape: string;
  imgPortrait: string;
}
export const GET_TECHNOLOGY = gql`
  query getDestinations {
    technologies {
      name
      bio
    }
  }
`;
export default function Technology() {
  const { error, data } = useQuery(GET_TECHNOLOGY);
  const [title] = useState("SPACE LAUNCH 101");
  // current technology in display
  const [tech, setTech] = useState<undefined | TechnologyData>(undefined);

  useEffect(() => {
    if (data) {
      const vehicle = {
        ...data.technologies[0],
        imgLandscape: vehicleLandscape,
        imgPortrait: vehiclePortrait,
      };
      setTech(vehicle);
    }
  }, [data]);
  // handle error
  if (error) return <ErrorHandler error={error} />;
  // handle data
  else if (tech) {
    let [vehicle, spaceport, capsule] = data.technologies;
    // add images to the technologies
    vehicle = {
      ...vehicle,
      imgLandscape: vehicleLandscape,
      imgPortrait: vehiclePortrait,
    };
    spaceport = {
      ...spaceport,
      imgLandscape: spaceportLandscape,
      imgPortrait: spaceportPortrait,
    };
    capsule = {
      ...capsule,
      imgLandscape: capsuleLandscape,
      imgPortrait: capsulePortrait,
    };
    return (
      <article className={styles["technology"]}>
        <h1 className={styles["technology-title"]}>
          <span className={styles["technology-title-number"]}>03</span> {title}
        </h1>

        <picture className={styles["technology-img"]}>
          <source media="(min-width: 1440px)" srcSet={tech.imgPortrait} />
          <img src={tech.imgLandscape} alt={tech.name} />
        </picture>

        <nav className={styles["technology-list"]}>
          <button onClick={() => setTech(vehicle)}>1</button>
          <button onClick={() => setTech(spaceport)}>2</button>
          <button onClick={() => setTech(capsule)}>3</button>
        </nav>

        <h2 className={styles["technology-name"]}>
          <span className={styles["technology-name-label"]}>
            THE TERMINOLOGY...
          </span>
          {tech.name}
        </h2>

        <p className={styles["technology-bio"]}>{tech.bio}</p>
      </article>
    );
  }
  // handle loading
  else return <Spinner />;
}

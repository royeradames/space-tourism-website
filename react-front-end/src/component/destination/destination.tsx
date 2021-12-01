import React, { useEffect, useState } from "react";
import styles from "./destination.module.scss";
import { useQuery, gql } from "@apollo/client";
/* images */
import moonImg from "../../assets/destination/image-moon.webp";
import marsImg from "../../assets/destination/image-mars.webp";
import europaImg from "../../assets/destination/image-europa.webp";
import titanImg from "../../assets/destination/image-titan.webp";
import Spinner from "../spinner/spinner";

interface DestinationData {
  name: string;
  message: string;
  distance: string;
  time: string;
  img: string;
}

export const GET_DESTINATION = gql`
  query getDestinations {
    destinations {
      name
      message
      distance
      time
    }
  }
`;
export default function Destinatation() {
  const [destination, setDestination] = useState<undefined | DestinationData>(
    undefined
  );

  const { loading, error, data } = useQuery(GET_DESTINATION);
  useEffect(() => {
    if (loading === false && data) {
      // default to moon
      let moon = data.destinations[0];
      moon = {
        ...moon,
        img: moonImg,
      };
      setDestination(moon);
    }
  }, [loading, data]);

  // handle error
  if (error) return <div>Error: {error.message}</div>;
  // handle the data
  else if (destination) {
    let [moon, mars, europa, titan] = data.destinations;
    // add destination image
    moon = {
      ...moon,
      img: moonImg,
    };
    mars = {
      ...mars,
      img: marsImg,
    };
    europa = {
      ...europa,
      img: europaImg,
    };
    titan = {
      ...titan,
      img: titanImg,
    };
    return (
      <article className={styles["destination"]}>
        <h1 className={styles["destination-title"]}>
          <span>01</span> PICK YOUR DESTINATION
        </h1>
        <img
          src={destination.img}
          alt={destination.name}
          className={styles["destination-img"]}
        />

        <nav className={styles["destination-list"]}>
          <button
            onClick={() => setDestination(moon)}
            className={styles["planet-list-moon"]}
          >
            MOON
          </button>
          <button
            onClick={() => setDestination(mars)}
            className={styles["planet-list-mars"]}
          >
            MARS
          </button>
          <button
            onClick={() => setDestination(europa)}
            className={styles["planet-list-europa"]}
          >
            EUROPA
          </button>
          <button
            onClick={() => setDestination(titan)}
            className={styles["planet-list-titan"]}
          >
            TITAN
          </button>
        </nav>
        <h2 className={styles["destination-name"]}>{destination.name}</h2>
        <p className={styles["destination-message"]}>{destination.message}</p>

        <hr className={styles["destination-line"]} />
        <h2
          className={`${styles["destination-label"]} ${styles["destination-label-distance"]}`}
        >
          AVG. DISTANCE
        </h2>
        <p
          className={`${styles["destination-stats"]} ${styles["destination-stats-distance"]}`}
        >
          {destination.distance}
        </p>
        <h2
          className={`${styles["destination-label"]} ${styles["destination-label-time"]}`}
        >
          Est. travel time
        </h2>
        <p
          className={`${styles["destination-stats"]} ${styles["destination-stats-time"]}`}
        >
          {destination.time}
        </p>
      </article>
    );
  }
  // handle loading
  else return <Spinner />;
}

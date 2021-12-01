import React, { useState, useEffect } from "react";
import styles from "./crew.module.scss";
import { useQuery, gql } from "@apollo/client";

/* images */
import commander from "../../assets/crew/image-douglas-hurley.webp";
import specialist from "../../assets/crew/image-mark-shuttleworth.webp";
import pilot from "../../assets/crew/image-victor-glover.webp";
import engineer from "../../assets/crew/image-anousheh-ansari.webp";

interface PageData {
  position: string;
  name: string;
  bio: string;
  img: string;
}

export const CREW_QUERY = gql`
  query getCrewMember {
    crew {
      position
      name
      bio
      img
    }
  }
`;

export default function Crew() {
  /* get crew member data from graphql */
  const { loading, error, data } = useQuery(CREW_QUERY);

  // innitialize page with commander data
  const [page, setPage] = useState<undefined | PageData>(undefined);

  useEffect(() => {
    if (loading === false && data) {
      setPage({ ...data.crew[0], img: commander });
    }
  }, [loading, data]);

  // handling errors
  if (error) return <p>Error: {error.message}</p>;
  // handling data
  else if (page) {
    const { crew }: { crew: PageData[] } = data;
    return (
      <article className={`${styles["crew"]}`}>
        <h1 className={styles["crew-title"]}>
          <span>02 </span>MEET YOUR CREW
        </h1>

        <img src={page.img} alt={page.name} className={styles["crew-img"]} />

        <nav className={styles["crew-list"]}>
          <button
            onClick={() => setPage({ ...crew[0], img: commander })}
          ></button>
          <button
            onClick={() => setPage({ ...crew[1], img: specialist })}
          ></button>
          <button onClick={() => setPage({ ...crew[2], img: pilot })}></button>
          <button
            onClick={() => setPage({ ...crew[3], img: engineer })}
          ></button>
        </nav>

        <h2 className={styles["crew-position"]}>{page.position}</h2>
        <h3 className={styles["crew-name"]}>{page.name}</h3>

        <p className={styles["crew-bio"]}>{page.bio}</p>
      </article>
    );
  }
  // handling loading
  else return <p>Loading...</p>;
}

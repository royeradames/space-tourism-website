import React from "react";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

/* query to get home page data */
export const HOME_PAGE_QUERY = gql`
  query getHomeData {
    home {
      title
      titleSpan
      message
      action
    }
  }
`;

interface PageData {
  title: string;
  titleSpan: string;
  message: string;
  action: string;
}
export default function Home() {
  const { error, data } = useQuery(HOME_PAGE_QUERY);
  // handle error
  if (error) return <p>Error :(</p>;
  // handle data
  else if (data) {
    const { home }: { home: PageData } = data;
    return (
      <article className={styles.home}>
        <h1 className={styles["home-title"]}>
          {home.title}
          <span>{home.titleSpan}</span>
        </h1>
        <p className={styles["home-message"]}>{home.message}</p>
        <Link className={styles["home-action"]} to="/destination">
          {home.action}
        </Link>
      </article>
    );
  }
  // handle loading
  else return <p>Loading...</p>;
}

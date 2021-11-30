import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export default function Home() {
  const pageData = {
    title: "SO, YOU WANT TO TRAVEL TO",
    titleSpan: "SPACE",
    message: `Let’s face it; if you want to go to space, you might as well genuinely go to
    outer space and not hover kind of on the edge of it. Well sit back, and
    relax because we’ll give you a truly out of this world experience!`,
    action: "EXPLORE",
  };
  const [page] = useState(pageData);
  return (
    <article className={styles.home}>
      <h1 className={styles["home-title"]}>
        {page.title}
        <span>{page.titleSpan}</span>
      </h1>
      <p className={styles["home-message"]}>{page.message}</p>
      <Link className={styles["home-action"]} to="/destination">
        {page.action}
      </Link>
    </article>
  );
}

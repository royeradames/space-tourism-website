import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

/* images */
import logo from "../../assets/shared/logo.svg";
export default function Header() {
  const [toggle, setIsToggle] = useState(false);
  return (
    <header className={styles.header}>
      <Link to="/" className={styles["header-logo"]}>
        <img src={logo} alt="Logo icon" />
      </Link>

      <button className={styles.nav} onClick={() => setIsToggle(!toggle)}>
        Menu
      </button>
      <nav className={`${styles.nav} ${toggle ? "" : styles["nav-hide"]}`}>
        <button
          onClick={() => setIsToggle(toggle!)}
          className={`${toggle ? "" : styles["nav-close"]}`}
        >
          close
        </button>
        <Link to="/">
          <span>00</span> HOME
        </Link>
        <Link to="/destination">
          <span>01</span> DESTINATION
        </Link>
        <Link to="/crew">
          <span>02</span> CREW
        </Link>
        <Link to="/technology">
          <span>03</span> TECHNOLOGY
        </Link>
      </nav>
    </header>
  );
}

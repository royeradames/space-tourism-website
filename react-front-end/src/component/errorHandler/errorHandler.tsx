import React from "react";
import styles from "./errorHandler.module.scss";
import { ApolloError } from "@apollo/client";

export default function ErrorHandler({ error }: { error: ApolloError }) {
  return (
    <article className={styles.error}>
      <h1 className={styles["error-title"]}>Error</h1>
      <p className={styles["error-message"]}>{error.message}</p>
    </article>
  );
}

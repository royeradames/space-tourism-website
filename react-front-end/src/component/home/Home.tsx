import React, { useState } from "react";

export default function Home() {
  const pageData = {
    title: "SO, YOU WANT TO TRAVEL TO",
    titleSpan: "SPACE",
    message: `Let’s face it; if you want to go to space, you might as well genuinely go to
    outer space and not hover kind of on the edge of it. Well sit back, and
    relax because we’ll give you a truly out of this world experience!`,
    action: "EXPLORE",
  };
  const [page, setPage] = useState(pageData);
  return (
    <article class="home">
      <h1 class="home-title">
        {page.title}
        <span>{page.titleSpan}</span>
      </h1>
      <p class="home-message">{page.message}</p>
      <a class="home-action" routerLink="/destination">
        {page.action}
      </a>
    </article>
  );
}

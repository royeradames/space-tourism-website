import React from "react";
import styles from "./header.module.scss";

export default function header() {
  return <header class="header">
  <a routerLink="/" class="header-logo"
    ><img src="assets/shared/logo.svg" alt="Logo icon"
  /></a>
  <button class="nav-toggle" (click)="toggle = !toggle">Menu</button>
  <nav class="nav" [ngClass]="{ 'nav-hide': !toggle }">
    <button (click)="toggle = !toggle" class="nav-close">close</button>
    <a routerLink="/"><span>00</span> HOME</a>
    <a routerLink="/destination"><span>01</span> DESTINATION</a>
    <a routerLink="/crew"><span>02</span> CREW</a>
    <a routerLink="/technology"><span>03</span> TECHNOLOGY</a>
  </nav>
</header>
}

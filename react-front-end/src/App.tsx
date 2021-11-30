import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import "./App.scss";
import Header from "./component/header/header";
import Home from "./component/home/home";
import Technology from "./component/technology/technology";
function App() {
  console.log(useMatch("/"));
  return (
    <main
      className={`${useMatch("/") ? "page-home" : ""} ${
        useMatch("/technology") ? "page-technology" : ""
      }`}
    >
      <Header />
      <Routes>
        {/* <Route>s renders the first one that matches the current URL. */}
        <Route path="/" element={<Home />}></Route>
        <Route path="technology" element={<Technology />}></Route>
        {/* <Route path="/users"><Users /></Route> */}
      </Routes>
    </main>
  );
}

export default App;

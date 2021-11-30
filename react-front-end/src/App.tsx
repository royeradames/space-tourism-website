import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./component/header/header";
function App() {
  return (
    <main>
      <Header />
      <Routes>
        {/* <Route>s renders the first one that matches the current URL. */}
        {/* <Route path="/about"><About /></Route> */}
        {/* <Route path="/users"><Users /></Route> */}
        {/* <Route path="/"><Home /></Route> */}
      </Routes>
    </main>
  );
}

export default App;

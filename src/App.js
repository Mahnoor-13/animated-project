import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WOW from "wowjs";
import Cards from "./components/Cards";
import Header from "./components/Header";
import CardDown from "./components/CardDown";
import Subscribe from "./components/Subscribe"


function App() {
  new WOW.WOW().init();
  return (
    <div className="App">
      <Header />
      <Cards />
      <CardDown />
      <Subscribe />
    </div>
  );
}

export default App;

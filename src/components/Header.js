import React from "react";
// import logo from "./logo.svg";
// import "../App.css";
import WOW from "wowjs";
// import Cards from "./Cards"

function Header() {
  new WOW.WOW().init();
  return (
      <div className="web">
        <h1 className="wow animate__rotateInDownRight " data-wow-duration="1s">
          ANIMATED WEB
        </h1>
        <p className="wow animate__rotateInUpRight  para" data-wow-duration="1s">
          Adding a little animation to a website can make it eye-popping.
          exceptionally impressive.
        </p>
      </div>
  );
}

export default Header;

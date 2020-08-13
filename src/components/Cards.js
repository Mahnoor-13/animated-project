import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import WOW from "wowjs";

function Cards() {
  new WOW.WOW().init();
  return (
 
    <div className="all-cards">
  
      <div className="images wow animate__fadeInTopLeft" data-wow-duration="1s">
        <img src={require("../images/img.svg")} width="300" alt="img"/>
        <p className="para">
          Adding a little animation to a website can make it eye-popping.
          exceptionally impressive.
        </p>
        <button >Welcome</button>
      </div>

      <div className="images wow animate__slideInDown" data-wow-duration="1s">
        <img src={require("../images/img3.png")} width="300" alt="img"/>
        <p className="para">
          Adding a little animation to a website can make it eye-popping.
          exceptionally impressive.
        </p>
        <button>Welcome</button>
      </div>

      <div
        className="images wow animate__fadeInTopRight"
        data-wow-duration="1s"
      >
        <img src={require("../images/dev2.png")} width="300" alt="img"/>
        <p className="para">
          Adding a little animation to a website can make it eye-popping.
          exceptionally impressive.
        </p>
        <button>Welcome</button>
      </div>
    </div>
  );
}

export default Cards;

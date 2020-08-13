import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import WOW from "wowjs";

function CardDown() {
  new WOW.WOW().init();
  return (
    <div className="img-para2">
      <div>
        <p className="para2  wow animate__flipInX" data-wow-duration="1s">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          culpa consequatur officia animi vero consectetur, doloremque
          explicabo, ab distinctio quia ipsa enim aspernatur voluptate iusto
          tenetur, ea adipisci rem laboriosam!
        </p>
      </div>
      <div>
        <img className="img2 wow animate__flipInY" data-wow-duration="1s" src={require("../images/dev.png")} />
      </div>
    </div>
  );
}

export default CardDown;

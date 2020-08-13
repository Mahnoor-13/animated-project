import React from "react";
import WOW from "wowjs";

function Contact() {
  new WOW.WOW().init();
  return (
    <div>
      <div>
        <h1
          className="wow animate__rotateIn heading-color"
          data-wow-duration="1s"
        >
          Subscribe
        </h1>
      </div>
      <div className="wow animate__lightSpeedInRight input-btn">
        <div>
          <input className=" inp wow animate__bounceInDown" data-wow-duration="1s" placeholder="Subscribe here" type="text" />
        </div>
        <div>
          <button className="btn wow animate__bounceInDown" data-wow-duration="1s">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

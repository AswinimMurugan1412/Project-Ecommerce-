import React from "react";
import "./Hero.css";
//import p14_img from "../Assets/product_14.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
    <img src={hero_image} alt="hero" />
  </div>
      <div className="hero-right">
        <h1> Be Fashion.</h1>
        <div>
          <div className="hero-right-text">
          <p><h4>Surprise Gifts </h4></p>
          </div>
          <p><h4>For everyone..</h4></p>
          <p><h6>Hurry'Up!</h6></p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Hero;

import React from "react";
import "./Offers.css";
import product_36 from "../Assets/product_36.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
      <h1>Offers upto 50%</h1>
        <h1>Offers Closes Soon</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
      </div>
      <div className="offers-right">
        <img src={product_36} alt="" />
      </div>
    </div>
  );
};

export default Offers;

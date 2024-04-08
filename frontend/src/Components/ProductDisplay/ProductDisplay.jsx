import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <h3><div className="productdisplay-right-price-new">₹{product.new_price}</div></h3>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
        <p className="productdisplay-right-category"><span>Category :</span>  Classic Look</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
          <h1><b>Select Size</b></h1>
          <div className="productdisplay-right-sizes">
            <div><b>S</b></div>
            <div><b>M</b></div>
            <div><b>L</b></div>
            <div><b>XL</b></div>
            <div><b>XXL</b></div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;

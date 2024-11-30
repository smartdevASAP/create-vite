import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted the finest ingridients and culinary expertise.Our mission is
          to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time{" "}
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
}

export default Header;

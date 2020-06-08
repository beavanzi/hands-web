import React from "react";
import logo from "../resources/images/Hands.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <img id="logo" src={logo} />
    </div>
  );
};

export default Header;

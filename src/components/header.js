import React from "react";
import logo from "../resources/images/Hands.svg";
import "./header.css";
import SearchAppBar from "./SearchBar.js";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <img id="logo" src={logo} />
        <div className="searchContainer">
          <SearchAppBar />
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import "styles/header.css";
import logo from "./../assets/img/logo-dirtyworld.png";

export default function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menuItems">
          <div className="menuItem">Value</div>
          <div className="menuItem">Roadmap</div>
          <div className="menuItem">Commitment</div>
          <div className="menuItem">Parties</div>
        </div>
        <div className="mintNow">Mint Now</div>
      </div>
    </div>
  );
}

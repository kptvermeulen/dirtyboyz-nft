import React from "react";
import star from "assets/img/Star.svg";
import "styles/value.css";
import phoneDW from "assets/img/phone.png";
import deskDW from "assets/img/desktop.png";

export default function Value() {
  return (
    <div className="maxWidthContainer">
      <div className="container valueContainer">
        <div className="column11">
          <div className="valueContent">
            <h2>Value</h2>
            <div className="exAccesContainer">
              <img src={star} alt="star" style={{ marginRight: "10px" }} />
              Exclusive Access
            </div>
            <p style={{ maxWidth: "500px" }}>
              Dirty World NFT gets you exclusive content from over 100 + content
              creators, Dirty World will be throwing the most exclusive
              masquerade party with Adult Entertainers, Content Creators, DJs,
              Celebrities, Dirty World partners and the World's most Exclusive
              people
            </p>
          </div>
          <div className="imageContainer">
            <img
              className="desktopImage"
              src={deskDW}
              alt="desktop DirtyWorld"
            />
            <img className="phoneImage" src={phoneDW} alt="phone DirtyWorld" />
          </div>
        </div>
      </div>
    </div>
  );
}

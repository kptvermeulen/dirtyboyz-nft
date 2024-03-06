import React from "react";
import Mask2 from "assets/img/mask2.png";
import Mask3 from "assets/img/mask3.png";
import Mask4 from "assets/img/mask4.png";
import "styles/masks.css";

export default function Masks() {
  return (
    <div className="maxWidthContainer" style={{ padding: "25px 0px" }}>
      <h2 style={{ marginBottom: "25px" }}>Masks</h2>
      <div className="column1111 maskColumns">
        <div className="container">
          <img src={Mask2} alt="mask" />
          <div className="maskContent">
            <h3>Silver Mask</h3>
            <p>
              Dirty World is 3D NFT collection of 6,969 unique mask, uniting{" "}
            </p>
          </div>
        </div>
        <div className="container">
          <img src={Mask3} alt="mask" />
          <div className="maskContent">
            <h3>Silver Mask</h3>
            <p>
              Dirty World is 3D NFT collection of 6,969 unique mask, uniting{" "}
            </p>
          </div>
        </div>
        <div className="container">
          <img src={Mask4} alt="mask" />
          <div className="maskContent">
            <h3>Silver Mask</h3>
            <p>
              Dirty World is 3D NFT collection of 6,969 unique mask, uniting{" "}
            </p>
          </div>
        </div>
        <div className="container">
          <img src={Mask2} alt="mask" />
          <div className="maskContent">
            <h3>Silver Mask</h3>
            <p>
              Dirty World is 3D NFT collection of 6,969 unique mask, uniting{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

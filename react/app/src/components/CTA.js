import React from "react";
import "styles/cta.css";
import Mask3 from "assets/img/mask3.png";

export default function CTA() {
  return (
    <div className="CTAContainer" style={{ marginTop: "50px" }}>
      <div className="maxWidthContainer">
        <div className="CTAContent">
          <h2>Become a part of the community</h2>
          <p>
            Join our discord server to follow the project updates and be the
            first to hear the exciting news.
          </p>
          <div className="btn">Join Discord</div>
        </div>
        <img className="mask1" src={Mask3} alt="mask" />
        <img className="mask2" src={Mask3} alt="mask" />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "styles/commitment.css";
import coin from "assets/img/coin.svg";
import stars from "assets/img/stars.svg";
import community from "assets/img/community.svg";

export default function Commitment() {
  const [tab, setTab] = useState(0);

  return (
    <div
      className="maxWidthContainer"
      style={{ padding: "25px 0px", paddingTop: "50px" }}
    >
      <div className="column11">
        <div className="commitmentContent">
          <h2>Commitment</h2>
          <div className="commitmentTabs disableSelect">
            <div
              className="commitmentTab"
              onClick={() => {
                setTab(0);
              }}
            >
              <p style={tab === 0 ? {} : { opacity: 0.2 }}>Issue</p>
              {tab === 0 ? <div className="cTabUnderline"></div> : ""}
            </div>
            <div
              className="commitmentTab"
              onClick={() => {
                setTab(1);
              }}
            >
              <p style={tab === 1 ? {} : { opacity: 0.2 }}>Solution</p>
              {tab === 1 ? <div className="cTabUnderline"></div> : ""}
            </div>
          </div>
          {tab === 1 ? (
            <p className="commitmentParagraph">
              Anonymity is a crucial concern when you talk about the interaction
              of people with adult content. In most cases, both the uploader and
              the viewer of nsfw videos have a strong desire for discretion and
              try to avoid sharing information that could be traced by unknown
              entities.
            </p>
          ) : (
            <p className="commitmentParagraph">
              Dirty World NFT gets you exclusive content from over 100 + content
              creators, Dirty World will be throwing the most exclusive
              masquerade party with Adult Entertainers, Content Creators, DJs,
              Celebrities, Dirty World partners and the World's most Exclusive
              people
            </p>
          )}
        </div>
        <div className="commitmentGrid">
          <div className="container">
            <div className="commitmentIcon">
              <img src={coin} alt="coin" />
            </div>
            <h3>Token</h3>
            <p>Pioneering a fair reward system for holders and creators.</p>
          </div>
          <div className="container">
            <div className="commitmentIcon">
              <img src={stars} alt="stars" />
            </div>
            <h3>Token</h3>
            <p>Pioneering a fair reward system for holders and creators.</p>
          </div>
          <div className="container">
            <div className="commitmentIcon">
              <img src={community} alt="community" />
            </div>
            <h3>Token</h3>
            <p>Pioneering a fair reward system for holders and creators.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

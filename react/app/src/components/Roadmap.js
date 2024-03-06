import React from "react";
import Slider from "react-slick";
import "styles/roadmap.css";

export default function Roadmap() {
  var settings = {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    swipeToSlide: true,
  };

  return (
    <div className="maxWidthContainer" style={{ padding: "50px 0px" }}>
      <p className="coloredText" style={{ fontWeight: 600 }}>
        The plan
      </p>
      <h2 style={{ marginTop: "-20px" }}>Roadmap</h2>
      <div className="roadmapSlider">
        <Slider {...settings}>
          <div className="slideItem">
            <div className="container">
              <p style={{ fontWeight: 600, marginBottom: "0px" }}>01</p>
              <h3>Admission</h3>
              <p>
                Artwork completion and website development. Community building
                and engagement on social media through promotions, giveaways and
                contests. We will Start partner introductions. Post Whitelist
                Pre Sale Sell Out We will invest $250,000 to fund a HUGE
                Marketing Campaign!{" "}
              </p>
            </div>
          </div>
          <div className="slideItem">
            <div className="container">
              <p style={{ fontWeight: 600, marginBottom: "0px" }}>01</p>
              <h3>Giveaway</h3>
              <p>
                We are giving away total worth of over $300,000 to our NFT
                holders post FULL sellout of the Mint that starts November 15th,
                2021. Rolex and Cartier Watches as well as a total of $50,000
                worth of Crypto (ETH) to Lucky NFT holders All winners will be
                disclosed on our Official Twitter (POST MINT SELLOUT) on
                December 15, 2021.
              </p>
            </div>
          </div>
          <div className="slideItem">
            <div className="container">
              <p style={{ fontWeight: 600, marginBottom: "0px" }}>01</p>
              <h3>Dirty World Hub</h3>
              <p>
                Holding a Dirty World NFT will get you access to 200+ pictures
                and videos from your favorite Adult content creators on the
                DirtyWorld Hub. We will then introduce content sales,
                merchandise sales and camming from your favorite adult creators.
                Lets not forget about recreation of your NFT! Introduction to
                $DWC ( Dirty World coins).Content, merchandise, camming and mask
                recreation will all be purchased with $DWC ( Dirty World coins)
                . Airdrop $DWC to Dirty World NFT holders. We will start with
                Money and $DWC contest for partners and holders. As the site
                continues to grow we will invest the earnings back into the
                Dirty world hub to keep it maintained and up to date !
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

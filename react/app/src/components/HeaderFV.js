import React, { useState } from "react";
import Slider from "react-slick";
import Fire from "assets/img/Fire.svg";
import "styles/headerFV.css";
import Mask1 from "assets/img/mask1.png";
import Mask2 from "assets/img/mask2.png";
import Mask3 from "assets/img/mask3.png";
import Mask4 from "assets/img/mask4.png";
import arrow from "assets/img/Arrow.svg";

export default function HeaderFV() {
  var sliderSettingsShow = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  var sliderSettingsThumb = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    asNavFor: ".sliderShow",
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();

  return (
    <div className="maxWidthContainer">
      <div className="headerFV column11">
        <div className="headerContent">
          <img src={Fire} alt="fire" />
          <h1>A collection for dirty boyz</h1>
          <p>
            Dirty World is 3D NFT collection of 6,969 unique mask, uniting like
            mind people on the ethereum blockchain to stay anonymous. Dirty
            world is stored as a ERC721 token with many utilities.
          </p>
          <div className="flex" style={{ marginTop: "40px" }}>
            <div className="btn">Join discord</div>
          </div>
          <p>
            6 969{" "}
            <span style={{ fontWeight: 300, opacity: 0.6 }}>
              NFTs available
            </span>
          </p>
        </div>
        <div className="headerCarouselContainer">
          <div className="headerCirclePink"></div>
          <div className="headerCirclePurple"></div>
          <div className="headerCarousel">
            <div className="corouselShow">
              <Slider
                {...sliderSettingsShow}
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
              >
                <div className="maskSlide">
                  <img src={Mask2} alt="mask" />
                </div>
                <div className="maskSlide">
                  <img src={Mask4} alt="mask" />
                </div>
                <div className="maskSlide">
                  <img src={Mask3} alt="mask" />
                </div>
                <div className="maskSlide">
                  <img src={Mask4} alt="mask" />
                </div>
              </Slider>
            </div>
            <div className="corouselInfo">
              <Slider
                {...sliderSettingsShow}
                asNavFor={nav1}
                ref={(slider3) => setNav3(slider3)}
              >
                <div className="infoSlide">
                  <div className="flex">
                    <h3>Silver mask</h3>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="slideArrow"
                      onClick={() => {
                        nav1.current.slickNext();
                      }}
                    />
                  </div>

                  <p>
                    Dirty World is 3D NFT collection of 6,969 unique mask,
                    uniting like mind people on the
                  </p>
                  <div className="progressBar">
                    <div
                      className="progressBarInside"
                      style={{ width: "25px" }}
                    ></div>
                  </div>
                </div>
                <div className="infoSlide">
                  <div className="flex">
                    <h3>Silver mask</h3>

                    <img
                      src={arrow}
                      alt="arrow"
                      className="slideArrow"
                      onClick={() => {
                        nav1.current.slickNext();
                      }}
                    />
                  </div>

                  <p>
                    Dirty World is 3D NFT collection of 6,969 unique mask,
                    uniting like mind people on the
                  </p>
                  <div className="progressBar">
                    <div
                      className="progressBarInside"
                      style={{ width: "50px" }}
                    ></div>
                  </div>
                </div>
                <div className="infoSlide">
                  <div className="flex">
                    <h3>Silver mask</h3>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="slideArrow"
                      onClick={() => {
                        nav1.current.slickNext();
                      }}
                    />
                  </div>

                  <p>
                    Dirty World is 3D NFT collection of 6,969 unique mask,
                    uniting like mind people on the
                  </p>
                  <div className="progressBar">
                    <div
                      className="progressBarInside"
                      style={{ width: "75px" }}
                    ></div>
                  </div>
                </div>
                <div className="infoSlide">
                  <div className="flex">
                    <h3>Silver mask</h3>
                    <img src={arrow} alt="arrow" className="slideArrow" />
                  </div>

                  <p>
                    Dirty World is 3D NFT collection of 6,969 unique mask,
                    uniting like mind people on the
                  </p>
                  <div className="progressBar">
                    <div
                      className="progressBarInside"
                      style={{ width: "100px" }}
                    ></div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="corouselThumbnails">
              <Slider
                {...sliderSettingsThumb}
                asNavFor={nav3}
                ref={(slider2) => setNav2(slider2)}
              >
                <div className="maskSlide">
                  <img src={Mask4} alt="mask" />
                </div>
                <div className="maskSlide">
                  <img src={Mask3} alt="mask" />
                </div>
                <div className="maskSlide">
                  <img src={Mask4} alt="mask" />
                </div>
                <div className="maskSlide">
                  <img src={Mask2} alt="mask" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

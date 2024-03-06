import React, { useEffect } from "react";
import Header from "components/Header";
import HeaderFV from "components/HeaderFV";
import Value from "components/Value";
import Masks from "components/Masks";
import Commitment from "components/Commitment";
import Parties from "components/Parties";
import Roadmap from "components/Roadmap";
import CTA from "components/CTA";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("scrollbar");
  }, []);

  const aS = {
    transform: "scale(1)",
    opacity: 1,
    transition: { type: "spring", duration: 1, bounce: 0.3, delay: 0 },
  };
  const iA = { transform: "scale(0.5)", opacity: 0 };

  var body = document.body,
    html = document.documentElement;

  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const tH = Math.round(0.1 * (height / 2.5)) / 100;

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Header />
      <HeaderFV />
      {/*<MintShowcase />*/}
      <Value />
      <Roadmap />
      <Masks />
      <Commitment />
      <Parties />
      <CTA />
    </>
  );
}

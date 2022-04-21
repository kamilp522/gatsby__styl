import React from "react";

import Video from "../../../videos/fireplace__solow.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroPhoneWrapper,
  HeroPhone,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={Video}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>KOMINKI NAJWYŻSZEJ JAKOŚCI DLA TWOJEGO DOMU</HeroH1>
      </HeroContent>
      <HeroPhoneWrapper>
        <HeroPhone href="tel:+48604453748">
          {"Zadzwoń:\xa0\xa0\xa0604 453 748"}
        </HeroPhone>
      </HeroPhoneWrapper>
    </HeroContainer>
  );
};

export default HeroSection;

import styled from "styled-components";
import backImage from "../../../images/backgrounds/hero__background.jpg";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 2;
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;

  @media screen and (orientation: landscape) and (max-width: 1000px) {
    justify-content: flex-start;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.76);
    z-index: 1;
    backdrop-filter: blur(0.42vw);
    -webkit-backdrop-filter: blur(0.42vw);

    @media screen and (orientation: portrait) {
      backdrop-filter: blur(0.5vh);
      -webkit-backdrop-filter: blur(0.5vh);
    }
  }

  @supports (-moz-appearance: none) {
    overflow: hidden;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @supports (-moz-appearance: none) {
    filter: blur(0.42vw);
    transform: scale(1.03);

    @media screen and (orientation: portrait) {
      filter: blur(0.5vh);
    }
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 2rem;
  line-height: 3.5rem;
  padding: 0 1.5rem;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1.25px;
  max-width: 310px;

  @media screen and (min-width: 1000px) {
    font-size: 2.25rem;
    line-height: 3.9125rem;
  }

  @media screen and (min-width: 1200px) {
    max-width: 380px;
    font-size: 2.5rem;
    line-height: 4.25rem;
  }

  @media screen and (min-width: 1600px) {
    max-width: 420px;
    font-size: 3rem;
    line-height: 5rem;
  }

  @media screen and (min-width: 1900px) {
    max-width: 480px;
    font-size: 3.5rem;
    line-height: 5.75rem;
  }

  @media screen and (orientation: landscape) and (max-width: 1000px) {
    font-size: 1.75rem;
    line-height: 2.75rem;
    text-align: left;
  }

  @media screen and (min-height: 700px) and (orientation: portrait) {
    line-height: 4.125rem;
  }
  @media screen and (min-height: 800px) and (orientation: portrait) {
    line-height: 4.5rem;
  }
  @media screen and (min-height: 900px) and (orientation: portrait) {
    line-height: 4.75rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.75rem;
  }

  @media screen and (max-height: 320px) and (orientation: landscape) {
    max-width: 280px;
    font-size: 1.575rem;
    line-height: 2.125rem;
  }
`;

export const HeroPhoneWrapper = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, -50%);
  z-index: 20;
  text-decoration: none;

  @media screen and (min-width: 1000px) {
    bottom: 1.5%;
  }

  @media screen and (orientation: landscape) and (max-width: 1000px) {
    bottom: 0;
  }
`;

export const HeroPhone = styled.a`
  display: block;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  margin-bottom: 1rem;
  border: none;
  background-color: #7e1606;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
  outline: none;
  white-space: nowrap;
  text-decoration: none;
  border: 1px solid #fff8;

  @media screen and (min-width: 1000px) {
    cursor: pointer;
  }

  @media screen and (min-width: 1366px) {
    padding: 1rem 2.55rem;
    font-size: 1.125rem;
  }

  @media screen and (min-width: 1600px) {
    padding: 1.125rem 3rem;
    font-size: 1.5rem;
  }

  @media screen and (orientation: landscape) and (max-width: 700px) {
    font-size: 0.875rem;
    padding: 0.75rem 1.75rem;
  }

  @media screen and (orientation: landscape) and (min-width: 700px) and (max-width: 1000px) {
    font-size: 1rem;
    padding: 0.925rem 2.125rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.9125rem;
    max-width: 16rem;
  }
`;

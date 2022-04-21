import styled from "styled-components";
import backImage from "../../../images/backgrounds/services__background.jpg";

export const ServicesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  z-index: 2;
  //min-height: 100vh;

  @media screen and (min-width: 1000px) and (max-width: 2000px) {
    min-height: 100vh;
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.91);
    z-index: -1;
    backdrop-filter: blur(0.5vw);

    @media screen and (orientation: portrait) {
      backdrop-filter: blur(0.6vh);
    }
  }
`;

export const ServicesWrapper = styled.div`
  margin: 0 auto;
  padding: 2.5em 3em;
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  grid-gap: 1.5em;

  @media screen and (min-width: 600px) {
    max-width: 40.5rem;
  }

  @media screen and (min-width: 1000px) {
    max-width: 50.5rem;
  }

  @media screen and (min-width: 1366px) {
    max-width: 55.5rem;
  }

  @media screen and (min-width: 1600px) {
    max-width: 65.5rem;
    grid-gap: 3em;
  }

  @media screen and (min-width: 2000px) {
    padding-bottom: 6rem;
  }

  /* @media screen and (min-width: 1600px) {
    padding: 6.75em 3em;
  } */
`;

export const TextWrapper = styled.div`
  max-width: 25rem;
`;

export const ServicesH2 = styled.h2`
  font-size: 2.1875rem;
  letter-spacing: 0.5px;
  color: #fbf8a6;
  text-align: center;

  @media screen and (min-width: 1000px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1600px) {
    padding-top: 2rem;
    line-height: 0.5rem;
    font-size: 3rem;
  }

  @media screen and (min-height: 700px) and (orientation: portrait) {
    margin-top: 1rem;
  }
`;

export const ServicesP = styled.p`
  font-size: 1.125rem;
  line-height: 1.6rem;
  color: white;
  padding: 1.5rem 0 0;
  border-top: 2px solid #fbf8a6;

  @media screen and (min-width: 1600px) {
    font-size: 1.25rem;
    padding: 1.5rem 0;
    border-bottom: 2px solid #fbf8a6;
  }
`;

export const ServicesH3 = styled.h3`
  font-size: 1.375rem;
  letter-spacing: 0.5px;
  padding: 1.5rem 0;
  text-align: center;
  color: #fbf8a6;
  border-top: 2px solid #fbf8a6;
  border-bottom: 2px solid #fbf8a6;

  @media screen and (min-width: 1000px) {
    font-size: 1.625rem;
  }

  @media screen and (min-width: 1600px) {
    font-size: 1.925rem;
  }
`;

export const ServicesCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const ServicesCard = styled.a`
  display: block;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 145px;
  margin: 1rem 0;
  padding: 1.875em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (min-width: 600px) {
    height: 155px;
    margin: 0 0.5rem;
  }
  @media screen and (min-width: 1200px) {
    height: 190px;
    margin: 0 1rem;
  }
`;

export const ServicesIcon = styled.img`
  width: 100%;
`;

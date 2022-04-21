import styled from "styled-components";
import backImage from "../../../images/backgrounds/contact__background.jpg";

export const ContactContainer = styled.div`
  position: relative;
  display: grid;
  color: #fff;
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;
  min-height: 50.5em;

  @media screen and (min-width: 1600px) and (max-width: 2000px) {
    min-height: 100vh;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.88);
    z-index: 1;
    backdrop-filter: blur(0.5vw);

    @media screen and (orientation: portrait) {
      backdrop-filter: blur(0.6vh);
    }
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  z-index: 2;
  height: 100%;
  max-width: 70em;
  margin: 0 auto;
  padding: 0 3em 1.5em 2.5em;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: 600px) {
    max-width: 500px;
  }

  @media screen and (min-width: 1600px) {
    padding-top: 2em;
  }
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col1" "col2 col2";
`;

export const Column1 = styled.div`
  width: 100%;
  grid-area: col1;
  margin: 0 auto;
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin: 0 auto;
  text-align: center;
  align-self: flex-start;

  @media screen and (min-width: 1600px) {
    align-self: flex-start;
  }
`;

export const TextWrapper = styled.div`
  max-width: 25rem;
  display: grid;
  grid-gap: 1em;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 600px) {
    max-width: 35rem;
  }
`;

export const ContactH2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-size: 2.1875rem;
  line-height: 3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  color: #fbf8a6;
  padding-bottom: 0.35em;
  border-bottom: 2px solid #fbf8a6;

  @media screen and (min-width: 1000px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1600px) {
    font-size: 3rem;
  }
`;

export const ContactPhone = styled.h4`
  font-weight: 400;
  font-size: 1.25rem;

  @media screen and (min-width: 1600px) {
    font-size: 1.5rem;
  }
`;

export const ContactMail = styled.h4`
  font-weight: 400;
  font-size: 0.9125rem;
  line-height: 1.375rem;
  letter-spacing: 0.25px;

  @media screen and (min-width: 1600px) {
    font-size: 1.125rem;
  }

  @media screen and (max-width: 280px) {
    word-wrap: break-word;
    width: 200px;
  }
`;

export const ContactAddress = styled.h4`
  font-weight: 400;
  font-size: 0.9375rem;
  letter-spacing: 0.25px;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 1600px) {
    font-size: 1.125rem;
    letter-spacing: 0.5px;
    max-width: 350px;
    justify-self: center;
  }
`;

export const GMapWrap = styled.div`
  height: 100%;
  padding-top: 1rem;
`;

export const GMap = styled.iframe`
  display: block;
  width: 250px;
  height: 460px;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 24px;

  @media screen and (min-width: 600px) {
    width: 415px;
  }

  @media screen and (min-width: 1500px) and (min-height: 864px) {
    margin-top: -0.625rem;
  }

  @media screen and (min-width: 1600px) and (min-height: 768px) {
    height: 630px;
  }

  @media screen and (max-width: 320px) {
    max-width: 190px;
  }
`;

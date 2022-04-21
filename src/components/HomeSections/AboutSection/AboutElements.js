import styled from "styled-components";
import backImage from "../../../images/backgrounds/about__background.jpg";

export const AboutContainer = styled.div`
  position: relative;
  display: grid;
  color: #fff;
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;
  padding: 2rem 0;

  @media screen and (min-width: 1000px) and (max-width: 2000px) {
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

export const AboutWrapper = styled.div`
  display: flex;
  z-index: 2;
  height: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 3rem 1.5rem 2.5rem;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: 1366px) {
    max-width: 1100px;
    padding: 0 1rem 1.5rem 1.5rem;
  }

  @media screen and (min-width: 1536px) {
    padding: 0 1rem 3.5rem 1.5rem;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col1" "col2 col2" "col3 col3";

  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1600px) {
    margin-top: 1rem;
  }
`;

export const Column1 = styled.div`
  width: 100%;
  grid-area: col1;
  margin: 0 auto;

  @media screen and (min-width: 1000px) {
    flex: 1 1 50%;
    max-width: 20rem;
    margin: 0 1rem 0 0;
    padding-bottom: 0.8rem;
  }

  @media screen and (min-width: 1400px) {
    max-width: 28rem;
    border-bottom: 2px solid #fbf8a6;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin: 0 auto;
  padding: 1.5rem 0;
  max-width: 400px;

  @media screen and (min-width: 600px) {
    max-width: 525px;
  }

  @media screen and (min-width: 1000px) {
    flex: 1 1 50%;
    margin: auto;
    padding-bottom: 0.8rem;
    max-width: 455px;
    justify-content: center;
  }

  @media screen and (min-width: 1366px) {
    max-width: 550px;
  }

  @media screen and (min-width: 1400px) {
    margin: 1rem 0 0 auto;
  }
`;

export const Column3 = styled.div`
  display: none;

  @media screen and (min-width: 1400px) {
    display: flex;
    max-width: 460px;
  }
`;

export const Column4 = styled.div`
  grid-area: col3;

  @media screen and (min-width: 1000px) {
    flex: 1 1 100%;
    margin: 0;
    padding: 0.8rem 0;
    border-top: 2px solid #fbf8a6;
  }

  @media screen and (min-width: 1400px) {
    flex: 1 1 50%;
    margin-left: 2.5rem;
    border-bottom: 2px solid #fbf8a6;
    align-self: flex-start;
  }
`;

export const Column5 = styled.div`
  display: none;
  grid-area: col3;

  @media screen and (min-width: 1000px) {
    display: block;
    flex: 1 1 50%;
    margin: 0;
    padding: 0.8rem 0;
    border-top: 2px solid #fbf8a6;
    border-bottom: 2px solid #fbf8a6;
  }

  @media screen and (min-width: 1400px) {
    flex: 1 1 40%;
    margin-right: 4.5rem;
    align-self: center;
    max-width: 580px;
  }
`;

export const Column6 = styled.div`
  display: none;

  @media screen and (min-width: 1400px) {
    display: flex;
    max-width: 420px;
    margin-bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 25rem;

  @media screen and (min-width: 600px) {
    max-width: 35rem;
  }

  @media screen and (min-width: 1000px) {
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  color: #fbf8a6;

  @media screen and (min-width: 1000px) {
    font-size: 2.375rem;
    margin-top: 0;
    text-align: left;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #fbf8a6;
  }

  @media screen and (min-width: 1600px) {
    font-size: 2.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.6rem;
  color: white;
  padding: 1.5rem 0;
  border-top: 2px solid #fbf8a6;
  border-bottom: 2px solid #fbf8a6;

  @media screen and (min-width: 1000px) {
    border: none;
    padding: 0;
    line-height: 1.75rem;
    letter-spacing: 0.6px;
  }

  @media screen and (min-width: 1600px) {
    font-size: 1.25rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
  border: 2px solid #fbf8a6;

  @media screen and (min-width: 1450px) {
    margin: 0.75rem 0;
  }

  @media screen and (min-width: 1750px) {
    margin: 1rem 0;
  }
`;

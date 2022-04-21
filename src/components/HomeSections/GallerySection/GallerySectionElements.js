import styled from "styled-components";
import backImage from "../../../images/backgrounds/gallery__section__background.jpg";
import { Link as LinkR } from "react-router-dom";

export const GalleryContainer = styled.div`
  position: relative;
  display: grid;
  color: #fff;
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;
  min-height: 45rem;

  @media screen and (min-width: 1000px) {
    min-height: 100vh;
  }

  @media screen and (min-width: 2000px) and (min-height: 864px) {
    min-height: 65rem;
  }

  @media screen and (max-height: 450px) {
    min-height: 45rem;
  }

  @media screen and (max-height: 450px) and (orientation: landscape) {
    min-height: 40rem;
  }

  @media screen and (min-height: 533px) and (orientation: portrait) {
    min-height: 51rem;
    align-content: flex-start;
  }

  @media screen and (min-height: 667px) and (orientation: portrait) {
    min-height: 47rem;
  }

  @media screen and (min-height: 840px) and (orientation: portrait) {
    min-height: 51rem;
  }

  @media screen and (min-height: 840px) and (orientation: portrait) {
    min-height: 53rem;
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

export const GalleryWrapper = styled.div`
  display: flex;
  z-index: 2;
  height: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 3rem 1.5rem 2.5rem;
  justify-content: center;

  @media screen and (min-width: 1366px) {
    margin-top: -2rem;
  }

  @media screen and (min-width: 1800px) {
    margin-top: -3rem;
  }
`;

export const GalleryRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col1" "col2 col2";

  @media screen and (orientation: landscape) {
    margin-top: -4.5rem;
  }
`;

export const Column1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-area: col1;
  margin: 0 auto;

  @media screen and (min-width: 1536px) {
    margin-top: 6.5rem;
    align-self: flex-start;
  }

  @media screen and (min-width: 1800px) {
    margin-top: 8.5rem;
    align-self: flex-start;
  }
`;

export const Column2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-area: col2;
  margin: -8rem auto 0;

  @media screen and (min-width: 1366px) {
    margin-top: -10rem;
  }

  @media screen and (min-width: 1536px) {
    margin-top: -12rem;
  }

  @media screen and (min-width: 1800px) {
    margin-top: -17rem;
  }

  @media screen and (min-height: 533px) and (orientation: portrait) {
    margin: 2rem 0 0;
  }

  @media screen and (min-height: 840px) and (orientation: portrait) {
    margin: 4rem 0 0;
  }

  @media screen and (min-height: 840px) and (orientation: portrait) {
    margin: 5.25rem 0 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 25rem;

  @media screen and (min-width: 600px) {
    max-width: 35rem;
  }

  @media screen and (min-width: 1000px) {
    max-width: 45rem;
  }
`;

export const Heading = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2.1875rem;
  line-height: 3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  color: #fbf8a6;

  @media screen and (min-width: 1000px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1600px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.6rem;
  color: white;
  padding: 1.5rem 0;
  border-top: 2px solid #fbf8a6;
  border-bottom: 2px solid #fbf8a6;

  @media screen and (min-width: 1600px) {
    font-size: 1.25rem;
  }
`;

export const BtnWrap = styled.div`
  position: relative;
  z-index: 50;
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1536px) {
    margin-bottom: 2.5rem;
  }
`;

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: #f7510a;
  white-space: nowrap;
  padding: 0.75rem 1.875rem;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 500;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
  }
`;

export const InsideGalleryWrapper = styled.div`
  display: none;

  @media screen and (min-width: 360px) and (max-width: 1000px) and (min-height: 360px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2em;

    & > img:nth-child(1),
    & > img:nth-child(7) {
      display: none;
    }

    & > img:nth-child(2) {
      transform: scale(0.65) translate(85%);

      @media screen and (min-height: 840px) and (orientation: portrait) {
        transform: scale(0.9) translate(35%);
      }
    }
    & > img:nth-child(6) {
      transform: scale(0.65) translate(-85%);

      @media screen and (min-height: 840px) and (orientation: portrait) {
        transform: scale(0.9) translate(-35%);
      }
    }

    & > img:nth-child(3),
    & > img:nth-child(5) {
      transform: scale(0.9);

      @media screen and (min-height: 840px) and (orientation: portrait) {
        transform: scale(1.3);
      }
    }

    & > img:nth-child(4) {
      transform: scale(1.45);

      @media screen and (min-height: 840px) and (orientation: portrait) {
        transform: scale(1.75);
      }
    }
  }

  @media screen and (min-width: 1000px) and (min-height: 576px) and (orientation: landscape) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const FarLeftImg2 = styled.img`
  width: 72px;
  border-radius: 18px;
  z-index: -1;

  @media screen and (min-width: 1000px) {
    width: 110px;
    transform: translateX(75%);
  }

  @media screen and (min-width: 1536px) and (min-height: 864px) {
    transform: scale(0.8) translate(50%);
  }

  @media screen and (min-width: 1800px) {
    transform: scale(1.25) translate(30%);
  }
`;

export const FarLeftImg = styled.img`
  width: 72px;
  border-radius: 18px;
  z-index: -1;

  @media screen and (min-width: 1000px) {
    width: 110px;
    transform: translateX(50%);
  }

  @media screen and (min-width: 1536px) and (min-height: 864px) {
    transform: scale(1.1);
  }

  @media screen and (min-width: 1800px) {
    transform: scale(1.5);
  }
`;

export const LeftImg = styled.img`
  width: 72px;
  border-radius: 18px;

  @media screen and (min-width: 1000px) {
    width: 110px;
    transform: translateX(25%);
  }

  @media screen and (min-width: 1536px) and (min-height: 864px) {
    transform: scale(1.6);
  }

  @media screen and (min-width: 1800px) {
    transform: scale(2);
  }
`;

export const CenterImg = styled.img`
  width: 72px;
  border-radius: 18px;
  z-index: 1;

  @media screen and (min-width: 1000px) {
    width: 110px;
    z-index: 0;
  }

  @media screen and (min-width: 1536px) and (min-height: 864px) {
    transform: scale(1.85);
    z-index: 1;
  }

  @media screen and (min-width: 1800px) {
    transform: scale(2.35);
  }
`;

export const RightImg = styled.img`
  width: 72px;
  border-radius: 18px;

  @media screen and (min-width: 1000px) {
    width: 110px;
    transform: translateX(-25%);
    z-index: -1;
  }

  @media screen and (min-width: 1536px) and (min-height: 864px) {
    transform: scale(1.6);
  }

  @media screen and (min-width: 1800px) {
    transform: scale(2);
  }
`;

export const FarRightImg = styled.img`
  width: 72px;
  border-radius: 18px;
  z-index: -1;

  @media screen and (min-width: 1000px) {
    width: 110px;
    transform: translateX(-50%);
    z-index: -2;
  }

  @media screen and (min-width: 1536px) and (min-height: 864px) {
    transform: scale(1.1);
    z-index: -2;
  }

  @media screen and (min-width: 1800px) {
    transform: scale(1.5);
  }
`;

export const FarRightImg2 = styled.img`
  width: 72px;
  border-radius: 18px;
  z-index: -1;

  @media screen and (min-width: 1000px) {
    width: 110px;
    transform: translateX(-75%);
    z-index: -3;
  }

  @media screen and (min-width: 1536px) and (min-height: 864px) {
    transform: scale(0.8) translate(-50%);
  }

  @media screen and (min-width: 1800px) {
    transform: scale(1.25) translate(-30%);
  }
`;

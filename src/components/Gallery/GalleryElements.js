import styled from "styled-components";
import {
  FaTimes,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";

//--------------- MODAL --------------//

export const GalleryModal = styled.div`
  &.modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(6, 6, 6, 0.96);
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
    user-select: none;
  }

  &.active {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`;

export const GalleryModalImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const GalleryModalImage = styled.img`
  max-height: 95%;
  width: auto;
  display: block;
  border-radius: 10%;
  line-height: 0;
  box-sizing: border-box;
  padding: 1.5em 0;
  margin: 0 auto;
`;

export const CloseIconBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 6.5rem;
  height: 6.5rem;
  background-color: transparent;
  user-select: none;
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 2.25rem;
  color: white;
  background-color: black;
  padding: 1px;
  border-radius: 50%;
  border: 3px solid white;
  z-index: 999;

  @media screen and (min-width: 1500px) {
    font-size: 3.25rem;
  }

  @media screen and (min-width: 1000px) {
    font-size: 2.75rem;
    &:hover {
      background-color: #555;
    }
  }

  @media screen and (min-height: 700px) and (orientation: portrait) {
    font-size: 2.5rem;
  }
  @media screen and (min-height: 800px) and (orientation: portrait) {
    font-size: 2.75rem;
  }
  @media screen and (min-height: 900px) and (orientation: portrait) {
    font-size: 3rem;
  }
`;

export const GalleryBarRight = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 7rem;
  background-color: transparent;
  user-select: none;
  z-index: 998;

  @media screen and (min-width: 700px) {
    width: 11rem;
  }

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const GalleryModalArrowRight = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;
  outline: none;
  font-size: 2.25rem;
  color: black;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
  z-index: 999;

  @media screen and (min-width: 600px) {
    right: 10%;
  }

  @media screen and (min-width: 1000px) {
    right: 20%;
  }

  @media screen and (min-width: 1000px) {
    font-size: 2.75rem;

    &:hover {
      color: #555;
    }
  }

  @media screen and (min-width: 1500px) {
    font-size: 3.25rem;
  }

  @media screen and (min-height: 700px) and (orientation: portrait) {
    font-size: 2.5rem;
  }
  @media screen and (min-height: 800px) and (orientation: portrait) {
    font-size: 2.75rem;
  }
  @media screen and (min-height: 900px) and (orientation: portrait) {
    font-size: 3rem;
  }
`;

export const GalleryBarLeft = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 7rem;
  background-color: transparent;
  user-select: none;
  z-index: 998;

  @media screen and (min-width: 700px) {
    width: 11rem;
  }

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const GalleryModalArrowLeft = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  outline: none;
  font-size: 2.25rem;
  color: black;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
  z-index: 999;

  @media screen and (min-width: 600px) {
    left: 10%;
  }

  @media screen and (min-width: 1000px) {
    left: 20%;
  }

  @media screen and (min-width: 1000px) {
    font-size: 2.75rem;

    &:hover {
      color: #555;
    }
  }

  @media screen and (min-width: 1500px) {
    font-size: 3.25rem;
  }

  @media screen and (min-height: 700px) and (orientation: portrait) {
    font-size: 2.5rem;
  }
  @media screen and (min-height: 800px) and (orientation: portrait) {
    font-size: 2.75rem;
  }
  @media screen and (min-height: 900px) and (orientation: portrait) {
    font-size: 3rem;
  }
`;

//----------------- GALLERY ---------------------//

export const GalleryContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.96);
  margin-top: 4rem;
  padding: 1rem 1.5rem;
  min-height: calc(100vh - 9.125rem);
`;

export const GalleryWrapper = styled.ul`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  justify-content: space-around;
  grid-gap: 0.25rem;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, 137.5px);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, 175px);
  }

  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center; */

  /* &:after {
    content: "";
    flex: auto;
  } */
`;

export const ImageWrapper = styled.li`
  display: block;
  color: black;
  transition: all 350ms ease;
  margin-bottom: 0.75rem;
  padding: 0.3125rem;
  align-self: center;
  //max-width: 100px;
  /* @media screen and (min-width: 600px) {
    width: 137.5px;
  }
  @media screen and (min-width: 1200px) {
    width: 175px;
  } */
`;

export const Image = styled.img`
  width: 100%;
  padding: 0.25rem;
  border-radius: 18px;
  cursor: pointer;

  &:hover {
    filter: opacity(0.6);
  }
`;

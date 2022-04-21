import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  GalleryModal,
  GalleryModalImageWrapper,
  GalleryModalImage,
  CloseIconBar,
  CloseIcon,
  GalleryBarRight,
  GalleryModalArrowRight,
  GalleryBarLeft,
  GalleryModalArrowLeft,
  GalleryContainer,
  GalleryWrapper,
  ImageWrapper,
  Image,
} from "./GalleryElements";

const Modal = (props) => {
  return (
    <GalleryModal className={props.isModalActive ? "modal active" : "modal"}>
      <GalleryModalImageWrapper>
        <CloseIconBar onClick={() => props.setModal(false)}></CloseIconBar>
        <CloseIcon onClick={() => props.setModal(false)} />
        <GalleryBarRight onClick={props.nextSlide} />
        <GalleryModalArrowRight onClick={props.nextSlide} />
        <GalleryBarLeft onClick={props.prevSlide} />
        <GalleryModalArrowLeft onClick={props.prevSlide} />
        <GalleryModalImage src={props.tempImgSrc} />
      </GalleryModalImageWrapper>
    </GalleryModal>
  );
};

const Gallery = ({ slides, slides__downsized }) => {
  const [isModalActive, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    if (current === length - 1) setTempImgSrc(slides[0].imageSrc);
    else setTempImgSrc(slides[current + 1].imageSrc);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    if (current === 0) setTempImgSrc(slides[length - 1].imageSrc);
    else setTempImgSrc(slides[current - 1].imageSrc);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const getImage = (imageSrc, index) => {
    setCurrent(index);
    setTempImgSrc(imageSrc);
    setModal(true);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Modal
          isModalActive={isModalActive}
          setModal={setModal}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          tempImgSrc={tempImgSrc}
        />,
        document.getElementById("modal-root")
      )}
      <GalleryContainer>
        <GalleryWrapper>
          {slides__downsized.map((slide, index) => {
            return (
              <ImageWrapper key={slide.id}>
                <Image
                  key={index}
                  onClick={() => {
                    getImage(slides[index].imageSrc, index);
                  }}
                  src={slide.imageSrc}
                  alt={`kominki_krosno_img${index + 1}`}
                />
              </ImageWrapper>
            );
          })}
        </GalleryWrapper>
      </GalleryContainer>
    </>
  );
};

export default Gallery;

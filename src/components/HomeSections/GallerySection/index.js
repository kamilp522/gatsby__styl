import React from "react";
import { GalleryData__Fireplaces__Downsized as slides } from "../../Gallery/GalleryData/GalleryData__Fireplaces__Downsized";

import {
  GalleryContainer,
  GalleryWrapper,
  GalleryRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  Button,
  InsideGalleryWrapper,
  FarLeftImg,
  FarLeftImg2,
  LeftImg,
  CenterImg,
  RightImg,
  FarRightImg,
  FarRightImg2,
} from "./GallerySectionElements";

const GallerySection = (props) => {
  const length = slides.length;

  const toggleHome = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <GalleryContainer id={props.id}>
        <GalleryWrapper>
          <GalleryRow>
            <Column1>
              <TextWrapper>
                <Heading>{props.headline}</Heading>
                <Subtitle>{props.description}</Subtitle>
                <BtnWrap>
                  <Button to="/gallery" onClick={toggleHome}>
                    {props.buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <InsideGalleryWrapper>
                <FarLeftImg2
                  src={slides[length - 2].imageSrc}
                  alt={props.alt}
                  loading="lazy"
                />
                <FarLeftImg
                  src={slides[3].imageSrc}
                  alt={props.alt}
                  loading="lazy"
                />
                <LeftImg
                  src={slides[length - 1].imageSrc}
                  alt={props.alt}
                  loading="lazy"
                />
                <CenterImg
                  src={slides[0].imageSrc}
                  alt={props.alt}
                  loading="lazy"
                />
                <RightImg
                  src={slides[55].imageSrc}
                  alt={props.alt}
                  loading="lazy"
                />
                <FarRightImg
                  src={slides[1].imageSrc}
                  alt={props.alt}
                  loading="lazy"
                />
                <FarRightImg2
                  src={slides[length - 3].imageSrc}
                  alt={props.alt}
                  loading="lazy"
                />
              </InsideGalleryWrapper>
            </Column2>
          </GalleryRow>
        </GalleryWrapper>
      </GalleryContainer>
    </>
  );
};

export default GallerySection;

import React from "react";

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
  Column6,
  TextWrapper,
  Heading,
  Subtitle,
  Img,
} from "./AboutElements";

const AboutSection = (props) => {
  return (
    <>
      <AboutContainer id={props.id}>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <Heading>{props.headline}</Heading>
                <Subtitle>{props.description__01}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <Img src={props.img1} alt={props.alt} loading="lazy" />
            </Column2>
            <Column3>
              <Img src={props.img2} alt={props.alt} loading="lazy" />
            </Column3>
            <Column4>
              <TextWrapper>
                <Subtitle>{props.description__02}</Subtitle>
              </TextWrapper>
            </Column4>
            <Column5>
              <TextWrapper>
                <Subtitle>{props.description__03}</Subtitle>
              </TextWrapper>
            </Column5>
            <Column6>
              <Img src={props.img3} alt={props.alt} loading="lazy" />
            </Column6>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;

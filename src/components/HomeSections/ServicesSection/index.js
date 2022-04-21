import React from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCardsWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesH3,
  ServicesP,
} from "./ServicesElements";

const ServicesSection = (props) => {
  return (
    <>
      <ServicesContainer id={props.id}>
        <ServicesWrapper>
          <ServicesH2>{props.headline}</ServicesH2>
          <ServicesP>{props.description}</ServicesP>
          <ServicesH3>{props.middleLine}</ServicesH3>
          <ServicesCardsWrapper>
            <ServicesCard href="https://www.defrohome.pl/" target="_blank">
              <ServicesIcon src={props.img1} alt={props.alt1} />
            </ServicesCard>
            <ServicesCard
              href="https://kratki.com/pl/ogrzewanie-domu/kominki"
              target="_blank">
              <ServicesIcon src={props.img2} alt={props.alt2} />
            </ServicesCard>
          </ServicesCardsWrapper>
          <ServicesH3>{props.bottomLine}</ServicesH3>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default ServicesSection;

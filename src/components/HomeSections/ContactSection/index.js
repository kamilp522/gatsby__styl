import React from "react";

import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  Column2,
  TextWrapper,
  ContactH2,
  ContactPhone,
  ContactMail,
  ContactAddress,
  GMapWrap,
  GMap,
} from "./ContactElements";

const ContactSection = (props) => {
  return (
    <>
      <ContactContainer id={props.id}>
        <ContactWrapper>
          <ContactRow>
            <Column1>
              <ContactH2>{props.headline}</ContactH2>
              <TextWrapper>
                <ContactPhone>{props.phone}</ContactPhone>
                <ContactMail>{props.mail}</ContactMail>
                <ContactAddress>{props.address}</ContactAddress>
              </TextWrapper>
            </Column1>
            <Column2>
              <GMapWrap>
                <GMap src={props.mapSource} allowfullscreen="" loading="lazy" />
              </GMapWrap>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;

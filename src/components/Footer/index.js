import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialLogo,
  WebsiteRights,
} from "./FooterElements";

const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialLogo to={props.directory} onClick={props.whichToggle}>
          Styl-Art-Kom
        </SocialLogo>
        <WebsiteRights>
          Copyright © styl-art-kom {new Date().getFullYear()}
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

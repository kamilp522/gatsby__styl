import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavbarContainer,
} from "./GalleryNavElements";

const GalleryNav = (props) => {
  const toggleHome = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <FaArrowLeft /> {`\xa0wstecz`}
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks
                color={props.currentGallery === "fireplaces" ? "true" : ""}
                onClick={props.galleryFireplaces}>
                Kominki
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                color={props.currentGallery === "awards" ? "true" : ""}
                onClick={props.galleryAwards}>
                Nagrody
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default GalleryNav;

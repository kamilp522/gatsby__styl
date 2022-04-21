import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = (props) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      setScrollNav({});
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: "white" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Styl-Art-Kom
          </NavLogo>
          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                offset={-71}
                smooth={true}
                duration={500}
                spy={true}
                exact="true">
                Nasza firma
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                offset={-71}
                smooth={true}
                duration={500}
                spy={true}
                exact="true">
                Usługi
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="gallery"
                offset={-71}
                smooth={true}
                duration={500}
                spy={true}
                exact="true">
                Galeria
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                offset={-71}
                smooth={true}
                duration={500}
                spy={true}
                exact="true">
                Kontakt
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;

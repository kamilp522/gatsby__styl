import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#0d0d0d" : "transparent")};
  height: 72px;
  margin-top: -72px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.5s;

  /* @media screen and (min-height: 700px) and (orientation: portrait) {
    height: 75px;
    margin-top: -75px;
  } */
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.575rem;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  word-break: keep-all;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -3.125rem;
    right: -3.75rem;
    padding: 1.375rem;
    transform: translate(-100%, 60%);
    font-size: 1.75rem;
    cursor: pointer;
    color: white;
    z-index: 10;

    @media screen and (min-height: 700px) and (orientation: portrait) {
      top: -3.5rem;
      font-size: 2.125rem;
    }
    @media screen and (min-height: 800px) and (orientation: portrait) {
      right: -4rem;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 72px;
`;

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 4rem;
  height: 100%;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    font-size: 1.125rem;
  }

  @media screen and (min-width: 1600px) {
    font-size: 1.375rem;
    padding: 0 3.5rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 2.275rem;
  }

  /* &.active {
    background-color: #7e1506;
    transition: 0.3s all ease-out;
  } */

  /* @supports (-moz-appearance: none) {
    &.active {
      background-color: none;
      transition: none;
    }
  } */
`;

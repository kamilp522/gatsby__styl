import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.div`
  background: #0d0d0d;
  height: 4rem;
  margin-top: -4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.5s ease-in-out;
  color: white;
  overflow: hidden;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  z-index: 1;
  width: 100%;
  padding: 0 2rem 0 1.25rem;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.25rem;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  word-break: keep-all;
  margin-right: 0.5rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: flex-start;
  list-style: none;
  text-align: left;
  margin-left: 0.6125rem;

  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  height: 4rem;
`;

export const NavLinks = styled.div`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.425rem;
  height: 100%;
  cursor: pointer;
  background-color: ${({ color }) => (color ? "#7e1506" : "#0d0d0d")};
`;

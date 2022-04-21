import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  cursor: pointer;
  outline: none;
  color: white;
  padding: 1em;
`;

export const CloseIcon = styled(FaTimes)`
  font-size: 1.75rem;
  color: white;

  @media screen and (min-height: 700px) {
    font-size: 2.25rem;
  }
`;

export const SidebarWrapper = styled.div`
  color: white;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 5.25rem);
  text-align: center;

  @media screen and (min-height: 700px) {
    grid-template-rows: repeat(4, 5.5rem);
  }

  @media screen and (min-height: 800px) {
    grid-template-rows: repeat(4, 6rem);
  }

  @media screen and (min-height: 900px) {
    grid-template-rows: repeat(4, 6.5rem);
  }

  @media screen and (max-height: 320px) and (orientation: landscape) {
    grid-template-rows: repeat(4, 4rem);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: white;
  cursor: pointer;

  /* &:hover {
    color: #f7510a;
    transition: 0.2s ease-in-out;
  } */
`;

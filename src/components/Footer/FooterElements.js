import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  height: 5.125rem;
  background-color: #0d0d0d;
  position: relative;
  z-index: 500;
`;

export const FooterWrap = styled.div`
  padding: 0.875rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialLogo = styled(Link)`
  color: white;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.575rem;
  padding-bottom: 0.1875em;
  display: flex;
  font-weight: 700;
`;

export const WebsiteRights = styled.small`
  color: white;
`;

import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" offset={-63} onClick={props.toggle}>
            O nas
          </SidebarLink>
          <SidebarLink to="services" offset={-63} onClick={props.toggle}>
            Usługi
          </SidebarLink>
          <SidebarLink to="gallery" offset={-63} onClick={props.toggle}>
            Galeria
          </SidebarLink>
          <SidebarLink to="contact" offset={-63} onClick={props.toggle}>
            Kontakt
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

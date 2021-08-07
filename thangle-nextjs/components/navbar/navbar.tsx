import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "./logo";
import { NavItems } from "./navItems";

const NavbarContainer = styled.div`
  min-height: 70px;
  ${tw`
    w-full    
    h-full
    flex 
    flex-row
    justify-between
    items-center
    max-w-screen-2xl
    lg:pl-12 
    lg:pr-12 
    `};
`;

const LogoContainer = styled.div``;
export function NavBar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}

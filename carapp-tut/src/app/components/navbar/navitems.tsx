import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { Screens } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-800
  `};

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-2xl
      mb-3
      focus:text-white
    `};
    `};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: Screens.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
              Home
            </a>
          </NavItem>
          <NavItem menu>
            <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
              Cars
            </a>
          </NavItem>
          <NavItem menu>
            <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
              Services
            </a>
          </NavItem>
          <NavItem menu>
            <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
              Contact Us
            </a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
          Home
        </a>
      </NavItem>
      <NavItem>
        <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
          Cars
        </a>
      </NavItem>
      <NavItem>
        <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
          Services
        </a>
      </NavItem>
      <NavItem>
        <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
          Contact Us
        </a>
      </NavItem>
    </ListContainer>
  );
}

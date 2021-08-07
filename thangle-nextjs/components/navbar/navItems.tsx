import styled, { css } from "styled-components";
import tw from "twin.macro";
import menuStyles from "./menuStyles";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { Screens } from "../responsive/responsive";

const ListContainer = styled.ul`
  ${tw`
    flex 
    list-none 
    `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
        text-xl     
        md: text-base
        text-white
        font-medium 
        mr-1
        ml-1
        md: mr-8 
        cursor-pointer
        transition 
        duration-300
        ease-in-out
        hover:text-gray-500
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
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: Screens.sm });
  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
              {" "}
              COLLAB{" "}
            </a>
          </NavItem>
          <NavItem menu>
            <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
              {" "}
              LEARN{" "}
            </a>
          </NavItem>
          <NavItem menu>
            <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
              {" "}
              SHOWCASE{" "}
            </a>
          </NavItem>
          <NavItem menu>
            <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
              {" "}
              BLOG{" "}
            </a>
          </NavItem>
          <NavItem menu>
            <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
              {" "}
              ABOUT US{" "}
            </a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      <NavItem>
        <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
          {" "}
          COLLAB{" "}
        </a>
      </NavItem>
      <NavItem>
        <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
          {" "}
          LEARN{" "}
        </a>
      </NavItem>
      <NavItem>
        <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
          {" "}
          SHOWCASE{" "}
        </a>
      </NavItem>
      <NavItem>
        <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
          {" "}
          BLOG{" "}
        </a>
      </NavItem>
      <NavItem>
        <a style={{ color: "inherit", textDecoration: "inherit" }} href="#">
          {" "}
          ABOUT US{" "}
        </a>
      </NavItem>
    </ListContainer>
  );
}

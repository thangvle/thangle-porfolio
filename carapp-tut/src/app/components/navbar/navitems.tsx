import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {Slide as Menu} from "react-burger-menu";

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none      
    `};
`;

const NavItem = styled.li`
    ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        mr-1 
        md:mr-5 
        cursor-pointer
        transition
        duration-300 
        hover:text-gray-800 
    `};
`;

export function NavItems () {
    return (
        <ListContainer>
            <NavItem>
                <a href="#"> Home </a>
            </NavItem>
            <NavItem>
                <a href="#"> Cars </a>
            </NavItem>
            <NavItem>
                <a href="#"> Service </a>
            </NavItem>
            <NavItem>
                <a href="#"> Contact us </a>
            </NavItem>
        </ListContainer>
    )
}
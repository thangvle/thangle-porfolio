import React from 'react'; 
import styled from 'styled-components';
import tw from 'twin.macro';

const NavBarContainer = styled.div`
    min-heigh:68px; 
    ${tw`
        w-full
        max-w-2xl 
        flex 
        flex-row
        item-center
        lg:pl-12
        lg:pr-12
        justify-between
        
    `};
`;

export function NavBar(){
    return <NavBarContainer>

    </NavBarContainer>
}
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarIcon from "../../../assets/car.svg";

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
        pl-5
    `};
`;

// Design look for text next to logo
//
const LogoText = styled.div`
  ${tw`
        text-xl
        md:text-2xl 
        font-bold
        text-black
        m-1 
        pl-2

    `};
`;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`};

  img {
    width: auto;
    height: 100%;
  }
`;
export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarIcon} />
      </Image>
      <LogoText> Ride Your Ass</LogoText>
    </LogoContainer>
  );
}

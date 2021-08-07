import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

import Icon from "./info.svg";

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    pl-5
    
    `};
`;
const LogoText = styled.h1`
  ${tw`
        text-2xl 
        md: text-2xl
        font-bold
        text-white
        m-1 
        pl-2 
    `};
`;
const ImageContainer = styled.div`
  width: 100%;
  ${tw`h-3 md:h-4`};
  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo() {
  return (
    <LogoContainer>
      <LogoText> Improv </LogoText>
    </LogoContainer>
  );
}

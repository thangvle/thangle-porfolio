import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

import sunset from "../../public/sunset.png";
import improvBG from "../../public/improv background.jpg";
import { NavBar } from "../navbar/navbar";
import { Marginer } from "../marginer";

const TopSectionContainer = styled.div`
  ${tw`
        
        w-full
        max-w-screen-2xl 
        flex 
        flex-col
        justify-between
        max-h-full
        
        bg-no-repeat
        bg-local
        overflow-x-hidden
        
    `};
`;
const ImageContainer = styled.div`
  z-index: -1;
  width: 100%;
  height: 75%;
  ${tw`
    bg-scroll
    left-10
    max-w-full
    overflow-hidden
    
  `};
`;
const HeroTextContainer = styled.h2`
  ${tw`
        font-bold
        text-2xl 
        xl:text-6xl
        sm: text-3xl 
        md: text-5xl 
        lg: font-black
        md: font-extrabold
        text-white
        pl-10
        pt-20
        mt-80
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `};
`;

const Description = styled.h3`
  ${tw`
        text-white
        text-lg
        lg:text-lg
        xl:text-xl 
        sm:max-h-full 
        overflow-hidden
        max-h-12
        pl-10
        pb-10
        
    `};
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <NavBar />
      <ImageContainer>
        <Image
          alt="sunset"
          src={improvBG}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </ImageContainer>
      <HeroTextContainer>Improve, Improvise</HeroTextContainer>
      <Description> Helping creative to adapt and get better</Description>
    </TopSectionContainer>
  );
}

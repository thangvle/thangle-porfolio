import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Audi from "../../../assets/Audi.png";
import Shape from "../../../assets/blob.svg";
import { Screens } from "../../components/responsive";
import { Button } from "../../components/button";
//lg:pl - For large screen, set padding left to 12px
const TopSectionContainer = styled.div`
  min-height: 600px;
  margin-top: 6em;
  ${tw`
    w-full 
    max-w-screen-2xl
    flex 
    justify-between
    pl-3 
    pr-3 
    lg:pl-12 
    lg:pr-12
    `};
`;
const LeftContainer = styled.div`
  ${tw`
    w-1/2 
    flex
    flex-col
    pl-10
    `};
`;

//mt: margin top
const RightContainer = styled.div`
  ${tw`
        w-12
        flex 
        flex-col
        relative
        mt-20
    `};
`;

const Slogan = styled.h1`
  ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm: text-3xl 
        md: text-5xl 
        lg: font-black
        md: font-extrabold
        text-black
        mb-4 
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
  ${tw`
        text-xs
        lg:text-sm
        xl:text-lg 
        sm:max-h-full 
        overflow-hidden
        max-h-12 
        text-gray-500 
    `};
`;

const ShapeContainer = styled.div`
  width: 30em;
  height: 10em;
  position: absolute;
  right: -20em;
  top: -20em;
  z-index: -1;
  transform: rotate(60deg);

  img {
    width: 200%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${Screens.xs}) {
    width: 50em; 
    max-height: 10em;
    right:-5em; 
    top:-16em; 
    transform: rotate(-30deg);

  @media (min-width: ${Screens.sm}) {
    width: 40em; 
    max-height: 10em;
    right:-9em; 
    top:-16em; 
    transform: rotate(-25deg); 
  }
  @media (min-width: ${Screens.lg}) {
    width: 50em; 
    max-height: 30em;
    right: -7em; 
    top: -15em; 
    transform: rotate(-25deg); 
  
    @media (min-width: ${Screens.xl}) {
      width: 70em; 
      max-height: 60em;
      right: -7em; 
      top: -15em; 
      transform: rotate(-25deg); 
`;
// set width to auto so it would not distort the image ratio
const StandaloneCar = styled.div`
  width: auto;
  height: 8em;
  right: -6em;
  top: 3em;
  position: absolute;

  img {
    width: auto;
    height: 200%;
    max-width: fit-content;
  }
  @media (min-width: ${Screens.xs}) {
    height: 5em;
    right: -6em;
    top: 3em;
  }
  @media (min-width: ${Screens.sm}) {
    height: 8em;
    right: -6em;
    top: 3em;
  }
  @media (min-width: ${Screens.md}) {
    height: 11em;
    right: -6em;
    top: -4em;
  }
  @media (min-width: ${Screens.lg}) {
    height: 12em;
    right: -8em;
    top: -4em;
  }
  @media (min-width: ${Screens.xl}) {
    height: 18em;
    right: -16em;
    top: -3em;
  }
`;

const ButtonContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    
    mt-5
  `};
`;
export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan> Bring the best car to your ride</Slogan>
        <Description>
          Here we have basic car, not sport car. Enough for you to ride your ass
          and have a good trip
        </Description>
        <ButtonContainer>
          <Button theme="outlined" text="Book a Car" />
          <Button theme="filled" text="Sell your car" />
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <ShapeContainer>
          <img src={Shape} />
        </ShapeContainer>
        <StandaloneCar>
          <img src={Audi} />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}

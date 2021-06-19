import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Audi from "../../../assets/Audi.png";
import Shape from "../../../assets/blob.svg";
//lg:pl - For large screen, set padding left to 12px
const TopSectionContainer = styled.div`
  min-height: 400px;
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
`;
// set width to auto so it would not distort the image ratio
const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -4em;
  top: -3em;
  position: absolute;

  img {
    width: auto;
    height: 300%;
    max-width: fit-content;
  }
`;
export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Slogan>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          consequuntur esse laboriosam fugiat aspernatur fuga, aliquid atque
          eligendi est voluptatum, asperiores veritatis. Sequi iure,
          consequuntur suscipit voluptatem consectetur doloribus nam!
        </Description>
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

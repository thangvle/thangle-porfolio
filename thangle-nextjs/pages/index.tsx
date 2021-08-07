import React from "react";
import Head from "next/head";

import HomePage from "../homepage/homepage";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import dynamic from "next/dynamic";

import { NavBar } from "../components/navbar/navbar";
import { TopSection } from "../components/topSection/topSection";
import { BookingSteps } from "../components/bookingStep/bookingStep";
import { Marginer } from "../components/marginer";

const HomeContainer = styled.div`
  ${tw`
        w-full
        h-full
        flex 
        flex-col
        items-center
        overflow-x-hidden
        bg-fixed

        
    `};
`;

export default function Home() {
  return (
    <HomeContainer>
      <TopSection />
      <Marginer direction="vertical" margin="10em" />
    </HomeContainer>
  );
}

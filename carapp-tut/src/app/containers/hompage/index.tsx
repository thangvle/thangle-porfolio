import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/marginer";
import { BookCalendar } from "../../components/bookCalendar";
import { NavBar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { BookingSteps } from "./bookingSteps";

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `};
`;
export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCalendar />
      <Marginer direction="vertical" margin="6em" />
      <BookingSteps />
    </PageContainer>
  );
}

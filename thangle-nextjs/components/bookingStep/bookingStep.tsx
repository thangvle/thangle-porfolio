import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faCar, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

// Flex keep the item align horizontaly with each other
// Flex-col kep the item align vertically
const BookingContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg: pt-6
        lg: pb-6 
    `};
`;

const Title = styled.h2`
  ${tw`
        text-xl 
        lg: text-5xl 
        text-black
        font-extrabold
        pl-3
    `};
`;

const StepContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap 
        mt-7 
        lg:mt-14 
        
    `};
`;

const CardContainer = styled.div`
  ${tw`
        flex
        flex-col
        m-3
        md:w-96
        items-center
        transition-colors
        hover:text-red-500
    `};
`;

const Card = styled.div`
  box-shadow: 0 0.3px 12px -1px rgba(0, 0, 0, 0.4);
  ${tw`
        flex 
        rounded-lg
        items-center
        justify-center
        p-6
    `};
`;

const CardTitle = styled.h4`
  ${tw`
        text-black
        text-lg
        font-semibold
        mt-4 
        mb-0
    `};
`;
const CardDescription = styled.p`
  ${tw`
        w-1/4
        text-xs    
        md:text-sm
        text-center
        text-gray-500
    `};
`;

const CardIcon = styled.span`
  ${tw`
        text-red-500
        text-3xl 
    `};
`;
export function BookingSteps() {
  return (
    <BookingContainer>
      <Title> Our quickest way to ride</Title>
      <StepContainer>
        <CardContainer>
          <Card>
            <CardIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </CardIcon>
          </Card>
          <CardTitle>Choose Location </CardTitle>
          <CardDescription>Pick a location and book your car.</CardDescription>
        </CardContainer>
        <CardContainer>
          <Card>
            <CardIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </CardIcon>
          </Card>
          <CardTitle>Choose a date </CardTitle>
          <CardDescription>Choose your start and end date</CardDescription>
        </CardContainer>
        <CardContainer>
          <Card>
            <CardIcon>
              <FontAwesomeIcon icon={faCar} />
            </CardIcon>
          </Card>
          <CardTitle>Book Your Car </CardTitle>
          <CardDescription>Choose your favourite car</CardDescription>
        </CardContainer>
      </StepContainer>
    </BookingContainer>
  );
}

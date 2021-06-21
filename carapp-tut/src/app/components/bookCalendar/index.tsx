import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../marginer";
import { Button } from "../button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Screens } from "../responsive";

const CardContainer = styled.div`
  min-height: 4em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.6);
  ${tw`
        flex 
        justify-center
        items-center
        rounded-md 
        bg-white
        pt-1 
        pb-1 
        pr-2
        pl-2
        md: pt-2
        md: pb-2
        md:pl-9
        md:pr-9
        sm: pl-2
        sm: pr-2
    `};
`;

const ItemContainer = styled.div`
  ${tw`
        flex    
        relative
    `};
`;
const Icon = styled.span`
  ${tw`
        text-red-500 
        fill-current
        text-xs 
        md:text-base
        mr-1
        md:mr-3 
    `};
`;
const SmallIcon = styled.span`
  ${tw`
        text-gray-700
        fill-current
        text-xs 
        md: text-base
        ml-1
    `};
`;

const Name = styled.span`
  ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `};
`;

//line separator

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `};
`;
//using offset to adjust the end calendar position
const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 3em;
  left: 0;
  user-select: none;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -7em;
    `};

  @media (min-width: ${Screens.sm}) {
    top: 3.5em;
    left: -2em;
  }
` as any;
export function BookCalendar() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartDateOpen, setStartCalendarOpen] = useState(false);
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isEndDateOpen, setEndCalendarOpen] = useState(false);
  console.log("Start date value", startDate);
  const openStartDateCalendar = () => {
    setStartCalendarOpen(!isStartDateOpen);
    if (isEndDateOpen) setEndCalendarOpen(false);
  };
  const openEndDateCalendar = () => {
    setEndCalendarOpen(!isEndDateOpen);
    if (isStartDateOpen) setStartCalendarOpen(false);
  };
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={openStartDateCalendar}> Pick up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon icon={isStartDateOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {isStartDateOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={openEndDateCalendar}> Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon icon={isEndDateOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {isEndDateOpen &&
          ((
            <DateCalendar offset value={endDate} onChange={setEndDate as any} />
          ) as any)}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book your ride" />
    </CardContainer>
  );
}

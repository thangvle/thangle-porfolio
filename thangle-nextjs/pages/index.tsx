import Head from "next/head";
import Image from "next/image";
import HomePage from "./posts/homepage/homepage";
import styled from "styled-components";
import tw from "twin.macro";

const HomeContainer = styled.div`
  ${tw`
        w-full
        h-full
        flex 
        flex-col
        items-center
        overflow-x-hidden

    `};
`;

export default function Home() {
  return <HomeContainer>Hello World</HomeContainer>;
}

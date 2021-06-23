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
export default function HomePage() {
  return <HomeContainer></HomeContainer>;
}

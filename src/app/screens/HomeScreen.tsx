"use client";
// components
import Searchbar from "../components/Searchbar";
// styles
import { MainHome, MainText, SubText } from "../styles/HomeScreen.styles";
import { FlexContainer } from "../styles/shared/Container.styles";

const HomeScreen = () => {
  return (
    <MainHome>
      <FlexContainer
        $alignItems="center"
        $height="120px"
        $justifyContent="space-around"
        $miscellaneous="margin-bottom: 50px;"
      >
        <MainText>Token In a Nutshell</MainText>
        <SubText>
          {" "}
          Unmask key metrics, top holders, and insightful data - all in one
          place.
        </SubText>
      </FlexContainer>
      <Searchbar />
    </MainHome>
  );
};

export default HomeScreen;

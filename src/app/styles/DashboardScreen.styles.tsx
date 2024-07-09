import styled from "styled-components";

interface IMarketDataBody {
  $fontSizeDiff?: string;
}

export const MainDashboard = styled.main`
  height: ${({
    theme: {
      app: { navbarHeight },
    },
  }) => `calc(100vh - ${navbarHeight}px - var(--margin))`};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: scroll;
  padding: 0px calc(var(--ten-px) * 3);
`;

export const DashboardContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: calc(var(--ten-px) * 2);
  margin: calc(var(--ten-px) * 3) 0px;
`;

export const TokenName = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: var(--ten-px);
`;

export const TokenSymbol = styled.h4`
  font-family: "Nunito Sans";
  font-size: 1.1rem;
  font-weight: bolder;
  opacity: 0.25;
  margin-left: var(--ten-px);
  color: ${({
    theme: {
      color: { white01 },
    },
  }) => white01};
`;

export const TokenIcon = styled.img`
  --size: 32px;
  height: var(--size);
  width: var(--size);
`;

export const MarketDataScroller = styled.main`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-x: scroll;
`;

export const MarketDataContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
`;

export const MarketData = styled.div`
  height: 250px;
  min-width: 300px;
  width: fit-content;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: calc(var(--ten-px) * 4) calc(var(--ten-px) * 2);
  ${({
    theme: {
      color: { blue02, blue03, white02 },
    },
  }) => `
    background: linear-gradient(to top, ${blue03}9A, #0001);
    box-shadow: 1px 1px 3px ${blue03}4A;
  `}
`;

export const MarketDataTitle = styled.h4`
  font-family: "Nunito Sans";
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({
    theme: {
      color: { gold },
    },
  }) => gold};
  text-transform: uppercase;
`;

export const MarketDataBody = styled.h4<IMarketDataBody>`
  font-family: Roboto;
  font-size: ${({ $fontSizeDiff }) =>
    $fontSizeDiff ? `calc(2.5rem - ${$fontSizeDiff})` : "2.5rem"};
  font-style: italic;
  font-weight: bolder;
  color: ${({
    theme: {
      color: { white02 },
    },
  }) => white02};

  span {
    color: ${({
      theme: {
        color: { gold },
      },
    }) => gold};
    font-size: ${({ $fontSizeDiff }) =>
      $fontSizeDiff ? `calc(3rem - ${$fontSizeDiff})` : "3rem"};
    margin-right: var(--ten-px);
  }
`;

export const MainPriceHistory = styled.main`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: calc(var(--ten-px) * 3);
  background-color: ${({
    theme: {
      color: { blue03 },
    },
  }) => `${blue03}45`};
`;

export const PriceHistoryTitle = styled.h4`
  font-family: "Nunito Sans";
  font-size: 1.1rem;
  font-weight: bolder;
  margin-left: var(--ten-px);
  color: ${({
    theme: {
      color: { blue01 },
    },
  }) => blue01};
  text-transform: uppercase;
`;

export const PriceContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--seven-px);
  margin-top: calc(var(--ten-px) * 2);
  border: 1px solid
    ${({
      theme: {
        color: { white02 },
      },
    }) => `${white02}15`};
  border-radius: 5px;
`;

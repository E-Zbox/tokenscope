"use client";
import { MutableRefObject, useEffect, useRef } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
// store
import { useTokenStore } from "@/store";
// styles
import {
  DashboardContainer,
  MainDashboard,
  MainPriceHistory,
  MarketData,
  MarketDataBody,
  MarketDataContainer,
  MarketDataScroller,
  MarketDataTitle,
  PriceContainer,
  PriceHistoryTitle,
  TokenIcon,
  TokenName,
  TokenSymbol,
} from "../styles/DashboardScreen.styles";
import { FlexContainer } from "../styles/shared/Container.styles";
// utils
import { screens } from "@/utils/data";
import { expressDecimalsAsZeroGroup } from "@/utils/transformers";

const DashboardScreen = () => {
  const tokenIconRef = useRef() as MutableRefObject<HTMLImageElement>;

  const {
    selectedTokenAddress,
    tokenMarketDataState,
    tokenMetadataState,
    tokenPriceHistoryState,
  } = useTokenStore(
    ({
      selectedTokenAddress,
      tokenMarketDataState,
      tokenMetadataState,
      tokenPriceHistoryState,
    }) => ({
      selectedTokenAddress,
      tokenMarketDataState,
      tokenMetadataState,
      tokenPriceHistoryState,
    })
  );

  const {
    whales: {
      assets: { cryptoX },
    },
  } = screens;

  const handleImageLoad = (e: Event) => {
    const { type } = e;

    if (type == "error") {
      tokenIconRef.current.setAttribute("src", cryptoX.src);
    }
  };

  useEffect(() => {
    console.log(tokenMarketDataState);
    console.log(tokenMetadataState);
    console.log(tokenPriceHistoryState);

    tokenIconRef.current?.addEventListener("load", handleImageLoad);
    tokenIconRef.current?.addEventListener("error", handleImageLoad);

    return () => {
      tokenIconRef.current?.removeEventListener("load", handleImageLoad);
      tokenIconRef.current?.removeEventListener("error", handleImageLoad);
    };
  }, [selectedTokenAddress]);

  if (!selectedTokenAddress) {
    return (
      <MainDashboard>
        <DashboardContainer>
          <h1>Search for a token address to view details.</h1>
        </DashboardContainer>
      </MainDashboard>
    );
  }

  let { high24h, lastPrice, low24h, marketCap, totalSupply, volume24h } =
    tokenMarketDataState[selectedTokenAddress];

  const { name, symbol, decimals } = tokenMetadataState[selectedTokenAddress];

  const tokenPriceHistory = tokenPriceHistoryState[selectedTokenAddress]
    .reverse()
    .map(({ price }) => Number(price));

  const high24hAsDecimal = expressDecimalsAsZeroGroup(Number(high24h));
  const lastPriceAsDecimal = expressDecimalsAsZeroGroup(Number(lastPrice));
  const low24hAsDecimal = expressDecimalsAsZeroGroup(Number(low24h));

  return (
    <MainDashboard>
      <DashboardContainer>
        <FlexContainer
          $flexDirection="row"
          $alignItems="center"
          $justifyContent="flex-start"
        >
          <TokenIcon
            ref={tokenIconRef}
            src={`https://assets.coincap.io/assets/icons/${symbol?.toLowerCase()}@2x.png`}
          />
          <TokenName>{name}</TokenName>
          <TokenSymbol>{symbol}</TokenSymbol>
        </FlexContainer>
        <MarketDataScroller>
          <MarketDataContainer>
            <MarketData>
              <MarketDataTitle>Total Supply</MarketDataTitle>
              <FlexContainer
                $height="100%"
                $alignItems="center"
                $justifyContent="center"
              >
                <MarketDataBody>
                  <span>$</span>
                  {expressDecimalsAsZeroGroup(Number(totalSupply))}
                </MarketDataBody>
              </FlexContainer>
            </MarketData>
            <MarketData>
              <MarketDataTitle>Recent Price</MarketDataTitle>
              <FlexContainer
                $height="100%"
                $alignItems="center"
                $justifyContent="center"
              >
                <MarketDataBody
                  $fontSizeDiff={
                    Number(lastPrice) > 1
                      ? ""
                      : `${
                          lastPriceAsDecimal.length > 5
                            ? `${(lastPriceAsDecimal.length - 5) * 1.2}px`
                            : ""
                        }`
                  }
                >
                  <span>$</span>
                  {lastPriceAsDecimal}
                </MarketDataBody>
              </FlexContainer>
            </MarketData>
            <MarketData>
              <MarketDataTitle>Decimals</MarketDataTitle>
              <FlexContainer
                $height="100%"
                $alignItems="center"
                $justifyContent="center"
              >
                <MarketDataBody>{decimals}</MarketDataBody>
              </FlexContainer>
            </MarketData>
            <MarketData>
              <MarketDataTitle>Market Cap</MarketDataTitle>
              <FlexContainer
                $height="100%"
                $alignItems="center"
                $justifyContent="center"
              >
                <MarketDataBody>
                  <span>$</span>
                  {expressDecimalsAsZeroGroup(Number(marketCap))}
                </MarketDataBody>
              </FlexContainer>
            </MarketData>
            <MarketData>
              <MarketDataTitle>High 24h</MarketDataTitle>
              <FlexContainer
                $height="100%"
                $alignItems="center"
                $justifyContent="center"
              >
                <MarketDataBody
                  $fontSizeDiff={
                    Number(lastPrice) > 1
                      ? ""
                      : `${
                          lastPriceAsDecimal.length > 5
                            ? `${(lastPriceAsDecimal.length - 5) * 1.2}px`
                            : ""
                        }`
                  }
                >
                  <span>$</span>
                  {high24hAsDecimal}
                </MarketDataBody>
              </FlexContainer>
            </MarketData>
            <MarketData>
              <MarketDataTitle>Low 24h</MarketDataTitle>
              <FlexContainer
                $height="100%"
                $alignItems="center"
                $justifyContent="center"
              >
                <MarketDataBody
                  $fontSizeDiff={
                    Number(lastPrice) > 1
                      ? ""
                      : `${
                          lastPriceAsDecimal.length > 5
                            ? `${(lastPriceAsDecimal.length - 5) * 1.2}px`
                            : ""
                        }`
                  }
                >
                  <span>$</span>
                  {low24hAsDecimal}
                </MarketDataBody>
              </FlexContainer>
            </MarketData>
            <MarketData>
              <MarketDataTitle>Volume 24h</MarketDataTitle>
              <FlexContainer
                $height="100%"
                $alignItems="center"
                $justifyContent="center"
              >
                <MarketDataBody>
                  <span>$</span>
                  {expressDecimalsAsZeroGroup(Number(volume24h))}
                </MarketDataBody>
              </FlexContainer>
            </MarketData>
          </MarketDataContainer>
        </MarketDataScroller>
        <MainPriceHistory>
          <FlexContainer
            $flexDirection="row"
            $justifyContent="space-between"
            $alignItems="center"
          >
            <PriceHistoryTitle>PRICE HISTORY</PriceHistoryTitle>
          </FlexContainer>
          <PriceContainer>
            <Sparklines data={tokenPriceHistory}>
              <SparklinesLine
                color={
                  tokenPriceHistory[tokenPriceHistory.length - 2] >
                  tokenPriceHistory[tokenPriceHistory.length - 1]
                    ? "red"
                    : "green"
                }
              ></SparklinesLine>
            </Sparklines>
          </PriceContainer>
        </MainPriceHistory>
      </DashboardContainer>
    </MainDashboard>
  );
};

export default DashboardScreen;

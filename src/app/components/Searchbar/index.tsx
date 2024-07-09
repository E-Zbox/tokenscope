"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
// store
import { useAppStore, useSearchStore, useTokenStore } from "@/store";
// styles
import { Loader } from "@/app/styles/Loader.styles";
import {
  MainSearch,
  SearchIcon,
  SearchInput,
} from "@/app/styles/Searchbar.styles";
// utils
import { screens } from "@/utils/data";
import {
  getTokenLatestLogs,
  getTokenMarketData,
  getTokenMetadata,
  getTokenPriceHistory,
  getTokenWhales,
} from "@/api";
import { FlexContainer } from "@/app/styles/shared/Container.styles";

const Searchbar = () => {
  const {
    default: {
      assets: { loaderGif, searchIcon },
    },
  } = screens;

  const { setAppHasScrolled } = useAppStore(({ setAppHasScrolled }) => ({
    setAppHasScrolled,
  }));

  const { formState, setFormState } = useSearchStore(
    ({ formState, setFormState }) => ({ formState, setFormState })
  );

  const [loading, setLoading] = useState(false);

  const {
    setSelectedTokenAddress,
    tokenLatestLogsState,
    updateTokenLatestLogsState,
    tokenMarketDataState,
    updateTokenMarketDataState,
    tokenMetadataState,
    updateTokenMetadataState,
    tokenPriceHistoryState,
    updateTokenPriceHistoryState,
    tokenWhalesState,
    updateTokenWhalesState,
  } = useTokenStore(
    ({
      setSelectedTokenAddress,
      tokenLatestLogsState,
      updateTokenLatestLogsState,
      tokenMarketDataState,
      updateTokenMarketDataState,
      tokenMetadataState,
      updateTokenMetadataState,
      tokenPriceHistoryState,
      updateTokenPriceHistoryState,
      tokenWhalesState,
      updateTokenWhalesState,
    }) => ({
      setSelectedTokenAddress,
      tokenLatestLogsState,
      updateTokenLatestLogsState,
      tokenMarketDataState,
      updateTokenMarketDataState,
      tokenMetadataState,
      updateTokenMetadataState,
      tokenPriceHistoryState,
      updateTokenPriceHistoryState,
      tokenWhalesState,
      updateTokenWhalesState,
    })
  );

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!loading) {
      setFormState({ [name]: value });
    }
  };

  const handleClick = async () => {
    const { input_search } = formState;

    const regex = /^0x[0-9a-fA-F]{40}$/;

    if (!regex.test(input_search)) {
      alert("Invalid ethereum address");
      return;
    }

    try {
      setLoading(true);

      const tokenContractAddress = input_search.toLowerCase();

      if (!tokenMetadataState[tokenContractAddress]) {
        const tokenMetadataResult = await getTokenMetadata(input_search);

        console.log(tokenMetadataResult);

        if (!tokenMetadataResult.success) {
          throw tokenMetadataResult.error;
        }

        updateTokenMetadataState(input_search, tokenMetadataResult.data);
      }

      if (!tokenMarketDataState[tokenContractAddress]) {
        const tokenMarketDataResult = await getTokenMarketData(input_search);

        console.log(tokenMarketDataResult);

        if (!tokenMarketDataResult.success) {
          throw tokenMarketDataResult.error;
        }

        updateTokenMarketDataState(input_search, tokenMarketDataResult.data);
      }

      if (!tokenPriceHistoryState[tokenContractAddress]) {
        const tokenPriceHistoryResult = await getTokenPriceHistory(
          input_search
        );

        console.log(tokenPriceHistoryResult);

        if (!tokenPriceHistoryResult.success) {
          throw tokenPriceHistoryResult.error;
        }

        updateTokenPriceHistoryState(
          input_search,
          tokenPriceHistoryResult.data
        );
      }

      if (!tokenLatestLogsState[tokenContractAddress]) {
        const tokenLatestLogsResult = await getTokenLatestLogs(input_search);

        console.log(tokenLatestLogsResult);

        if (!tokenLatestLogsResult.success) {
          throw tokenLatestLogsResult.error;
        }

        updateTokenLatestLogsState(input_search, tokenLatestLogsResult.data);
      }

      if (!tokenWhalesState[tokenContractAddress]) {
        const tokenWhalesResult = await getTokenWhales(input_search);

        console.log(tokenWhalesResult);

        if (!tokenWhalesResult.success) {
          throw tokenWhalesResult.error;
        }

        updateTokenWhalesState(input_search, tokenWhalesResult.data);
      }

      setSelectedTokenAddress(tokenContractAddress);

      setAppHasScrolled(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainSearch>
      <SearchInput
        id="input_search"
        name="input_search"
        placeholder="Learn more about any ERC-20 Address"
        value={formState.input_search}
        onChange={handleChange}
      />
      {loading ? (
        <FlexContainer
          $alignItems="center"
          $justifyContent="center"
          $height="100%"
          $width="fit-content"
          $miscellaneous="margin-left: 6px;"
        >
          <Loader src={loaderGif.src} $size={"28px"} />
        </FlexContainer>
      ) : (
        <SearchIcon
          src={searchIcon.src}
          alt=""
          onClick={handleClick}
          $enabled={formState.input_search.length > 0}
        />
      )}
    </MainSearch>
  );
};

export default Searchbar;

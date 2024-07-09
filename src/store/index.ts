import { create } from "zustand";
// api/interface
import {
  ITokenLatestLog,
  ITokenMarketData,
  ITokenMetadata,
  ITokenPrice,
  ITokenWhale,
} from "@/api/interface";
// utils
import menuItems, { IMenuItem } from "@/utils/menu";

interface IAppStore {
  appHasScrolled: boolean;
  setAppHasScrolled: (newState: boolean) => void;
  navbarHeight: number;
  setNavbarHeight: (newState: number) => void;
}

export const useAppStore = create<IAppStore>((set) => ({
  appHasScrolled: false,
  setAppHasScrolled: (newState: boolean) => set({ appHasScrolled: newState }),
  navbarHeight: 0,
  setNavbarHeight: (newState: number) => set({ navbarHeight: newState }),
}));

interface IRecord {
  [name: string]: string;
}

interface ISearchStore {
  formState: IRecord;
  setFormState: (newState: IRecord) => void;
  searchShowState: boolean;
  setSearchShowState: (newState: boolean) => void;
}

export const useSearchStore = create<ISearchStore>((set) => ({
  formState: { input_search: "" },
  setFormState: (newState: IRecord) =>
    set((store) => ({ formState: { ...store.formState, ...newState } })),
  searchShowState: true,
  setSearchShowState: (newState: boolean) => set({ searchShowState: newState }),
}));

interface IMenuStore {
  menuState: IMenuItem[];
  setSelectedMenuState: (href: string) => void;
}

export const useMenuStore = create<IMenuStore>((set) => ({
  menuState: menuItems,
  setSelectedMenuState: (href: string) =>
    set((store) => {
      const updatedMenuState = store.menuState.map((item) => ({
        ...item,
        selected: item.href === href,
      }));

      return {
        menuState: updatedMenuState,
      };
    }),
}));

interface ITokenLatestLogsRecord {
  [name: string]: ITokenLatestLog[];
}

interface ITokenMarketDataRecord {
  [name: string]: ITokenMarketData;
}

interface ITokenMetadataRecord {
  [name: string]: ITokenMetadata;
}

interface ITokenPriceHistoryRecord {
  [name: string]: ITokenPrice[];
}

interface ITokenWhalesRecord {
  [name: string]: ITokenWhale[];
}

interface ITokenStore {
  selectedTokenAddress: string;
  setSelectedTokenAddress: (newState: string) => void;
  tokenLatestLogsState: ITokenLatestLogsRecord;
  updateTokenLatestLogsState: (
    address: string,
    tokenLatestLogs: ITokenLatestLog[]
  ) => void;
  tokenMarketDataState: ITokenMarketDataRecord;
  updateTokenMarketDataState: (
    address: string,
    tokenMarketData: ITokenMarketData
  ) => void;
  tokenMetadataState: ITokenMetadataRecord;
  updateTokenMetadataState: (
    address: string,
    tokenMetadata: ITokenMetadata
  ) => void;
  tokenPriceHistoryState: ITokenPriceHistoryRecord;
  updateTokenPriceHistoryState: (
    address: string,
    tokenWhales: ITokenPrice[]
  ) => void;
  tokenWhalesState: ITokenWhalesRecord;
  updateTokenWhalesState: (address: string, tokenWhales: ITokenWhale[]) => void;
}

export const useTokenStore = create<ITokenStore>((set) => ({
  selectedTokenAddress: "",
  setSelectedTokenAddress: (newState: string) =>
    set({ selectedTokenAddress: newState }),
  tokenLatestLogsState: {},
  updateTokenLatestLogsState: (
    address: string,
    tokenLatestLogs: ITokenLatestLog[]
  ) =>
    set((store) => ({
      tokenLatestLogsState: {
        ...store.tokenLatestLogsState,
        [address.toLowerCase()]: tokenLatestLogs,
      },
    })),
  tokenMarketDataState: {},
  updateTokenMarketDataState: (
    address: string,
    tokenMarketData: ITokenMarketData
  ) =>
    set((store) => ({
      tokenMarketDataState: {
        ...store.tokenMarketDataState,
        [address.toLowerCase()]: tokenMarketData,
      },
    })),
  tokenMetadataState: {},
  updateTokenMetadataState: (address: string, tokenMetadata: ITokenMetadata) =>
    set((store) => ({
      tokenMetadataState: {
        ...store.tokenMetadataState,
        [address.toLowerCase()]: tokenMetadata,
      },
    })),
  tokenPriceHistoryState: {},
  updateTokenPriceHistoryState: (
    address: string,
    tokenPriceHistory: ITokenPrice[]
  ) =>
    set((store) => ({
      tokenPriceHistoryState: {
        ...store.tokenPriceHistoryState,
        [address.toLowerCase()]: tokenPriceHistory,
      },
    })),
  tokenWhalesState: {},
  updateTokenWhalesState: (address: string, tokenWhales: ITokenWhale[]) =>
    set((store) => ({
      tokenWhalesState: {
        ...store.tokenWhalesState,
        [address.toLowerCase()]: tokenWhales,
      },
    })),
}));

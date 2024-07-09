export interface IRecord {
  [name: string]: string;
}

interface IGenericResponse<T> {
  data: T;
  error: string;
  success: boolean;
}

export interface ITokenMetadata {
  name: string | null;
  symbol: string | null;
  contractAddress: string;
  decimals: string | null;
  genesisBlock: string | null;
  genesisTransaction: string | null;
}

export interface ITokenMetadataResponse
  extends IGenericResponse<ITokenMetadata> {}

export interface ITokenLatestLog {
  address: string;
  topics: string[];
  data: string;
  blockNumber: string;
  transactionHash: string;
  transactionIndex: string;
  blockHash: string;
  logIndex: string;
  removed: boolean;
  timestamp: string;
}

export interface ITokenLatestLogsResponse
  extends IGenericResponse<ITokenLatestLog[]> {}

export interface ITraceTxHash {
  action: {
    from: string;
    callType: string;
    gas: string;
    input: string;
    to: string;
    value: string;
  };
  blockHash: string;
  blockNumber: number;
  result: {
    gasUsed: string;
    output: string;
  };
  subtraces: number;
  traceAddress: [];
  transactionHash: string;
  transactionPosition: number;
  type: string;
}

export interface ITraceTxHashResponse extends IGenericResponse<ITraceTxHash> {}

export interface ITokenPrice {
  price: string;
  time: string;
  priceAbnormal: any[];
}

export interface ITokenPriceHistoryResponse
  extends IGenericResponse<ITokenPrice[]> {}

export interface ITokenMarketData {
  lastPrice: string;
  totalSupply: string;
  maxSupply: string;
  circulatingSupply: string;
  volume24h: string;
  marketCap: string;
  high24h: string;
  low24h: string;
  priceAbnormal: any[];
}

export interface ITokenMarketDataResponse
  extends IGenericResponse<ITokenMarketData> {}

export interface ITokenWhale {
  holderAddress: string;
  amount: string;
  valueUsd: string;
  positionChange24h: string;
  rank: string;
}

export interface ITokenWhalesResponse extends IGenericResponse<ITokenWhale[]> {}

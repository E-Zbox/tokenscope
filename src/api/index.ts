import { Core } from "@quicknode/sdk";
// interface
import {
  ITokenMetadataResponse,
  IRecord,
  ITokenMarketDataResponse,
  ITokenPriceHistoryResponse,
  ITokenWhalesResponse,
  ITokenLatestLogsResponse,
  ITraceTxHashResponse,
} from "./interface";

const NEXT_PUBLIC_QUICKNODE_ENDPOINT =
  process.env.NEXT_PUBLIC_QUICKNODE_ENDPOINT;

if (!NEXT_PUBLIC_QUICKNODE_ENDPOINT) {
  throw new Error("Missing `NEXT_PUBLIC_QUICKNODE_ENDPOINT` in env variables");
}

export const getTokenMetadata = async (
  contract: string
): Promise<ITokenMetadataResponse> => {
  let response: ITokenMetadataResponse = {
    data: {
      contractAddress: "",
      decimals: "",
      genesisBlock: "",
      genesisTransaction: "",
      name: "",
      symbol: "",
    },
    error: "",
    success: false,
  };

  try {
    const core = new Core({
      endpointUrl: "https://docs-demo.quiknode.pro/",
      config: {
        addOns: {
          nftTokenV2: true,
        },
      },
    });

    const result = await core.client.qn_getTokenMetadataByContractAddress({
      contract,
    });

    if (result == null)
      throw new Error("Provided address is not an ERC-20 contract address");

    // const data: IRecord = {};

    // const allowedKeys = ["name", "symbol", "contractAddress", "decimals", "genesisBlock", "genesisTransaction"]

    // Object.getOwnPropertyNames(result).forEach((key) => {
    //     if (!allowedKeys.includes(key)) return;
    //   data[key] = result[key]|| "";
    // });

    response = {
      data: result,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getTokenLatestLogs = async (
  tokenContractAddress: string
): Promise<ITokenLatestLogsResponse> => {
  let response = {
    data: [],
    error: "",
    success: false,
  };

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      jsonrpc: "2.0",
      method: "erigon_getLatestLogs",
      params: [
        {
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        },
        {
          logCount: 1000,
        },
      ],
      id: 1,
    });

    const result = await fetch(NEXT_PUBLIC_QUICKNODE_ENDPOINT, {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    });

    const { result: data } = await result.json();

    if (data.length == 0)
      throw new Error(
        "Provided token contract address does not have any recent logs"
      );

    response = {
      data,
      error: "",
      success: true,
    };
  } catch (error) {
  } finally {
    return response;
  }
};

export const getTraceTransactionHash = async (
  tokenContractAddress: string
): Promise<ITraceTxHashResponse> => {
  let response: ITraceTxHashResponse = {
    data: {
      action: {
        from: "",
        callType: "",
        gas: "",
        input: "",
        to: "",
        value: "",
      },
      blockHash: "",
      blockNumber: 0,
      result: { gasUsed: "", output: "" },
      subtraces: 0,
      traceAddress: [],
      transactionHash: "",
      transactionPosition: 0,
      type: "",
    },
    error: "",
    success: false,
  };

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      method: "trace_transaction",
      params: [
        "0x3277c743c14e482243862c03a70e83ccb52e25cb9e54378b20a8303f15cb985d",
      ],
      id: 1,
      jsonrpc: "2.0",
    });

    const result = await fetch(NEXT_PUBLIC_QUICKNODE_ENDPOINT, {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    });

    const { result: data } = await result.json();

    if (data.length == 0)
      throw new Error("Porvided `transactionHash` has no trace data");

    response = {
      data: data[0],
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

const NEXT_PUBLIC_OKLINK_ACCESS_KEY = process.env.NEXT_PUBLIC_OKLINK_ACCESS_KEY;

if (!NEXT_PUBLIC_OKLINK_ACCESS_KEY) {
  throw new Error("Missing `NEXT_PUBLIC_OKLINK_ACCESS_KEY` in env variables");
}

const NEXT_PUBLIC_OKLINK_ENDPOINT = process.env.NEXT_PUBLIC_OKLINK_ENDPOINT;

if (!NEXT_PUBLIC_OKLINK_ENDPOINT) {
  throw new Error("Missing `NEXT_PUBLIC_OKLINK_ENDPOINT` in env variables");
}

const okLinkOptions = {
  headers: {
    "OK-ACCESS-KEY": NEXT_PUBLIC_OKLINK_ACCESS_KEY,
  },
};

export const getTokenPriceHistory = async (
  tokenContractAddress: string
): Promise<ITokenPriceHistoryResponse> => {
  let response: ITokenPriceHistoryResponse = {
    data: [],
    error: "",
    success: false,
  };

  try {
    const result = await fetch(
      `${NEXT_PUBLIC_OKLINK_ENDPOINT}/tokenprice/historical?chainId=1&tokenContractAddress=${tokenContractAddress}`,
      okLinkOptions
    );

    const { code, data, msg } = await result.json();

    if (msg.length > 0) throw new Error(msg);

    if (data.length == 0) {
      throw new Error(
        "No prices was found the provided token contract address"
      );
    }

    response = {
      data,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getTokenMarketData = async (
  tokenContractAddress: string
): Promise<ITokenMarketDataResponse> => {
  let response: ITokenMarketDataResponse = {
    data: {
      circulatingSupply: "",
      high24h: "",
      lastPrice: "",
      low24h: "",
      marketCap: "",
      maxSupply: "",
      priceAbnormal: [],
      totalSupply: "",
      volume24h: "",
    },
    error: "",
    success: false,
  };

  try {
    const result = await fetch(
      `${NEXT_PUBLIC_OKLINK_ENDPOINT}/tokenprice/market-data?chainId=1&tokenContractAddress=${tokenContractAddress}`,
      okLinkOptions
    );
    const { code, data, msg } = await result.json();

    if (msg.length > 0) throw new Error(msg);

    if (data.length == 0) {
      throw new Error(
        "No marketdata was found the provided token contract address"
      );
    }

    response = {
      data: data[0],
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

export const getTokenWhales = async (
  tokenContractAddress: string
): Promise<ITokenWhalesResponse> => {
  let response: ITokenWhalesResponse = {
    data: [],
    error: "",
    success: false,
  };

  try {
    const result = await fetch(
      `${NEXT_PUBLIC_OKLINK_ENDPOINT}/token/position-list?chainShortName=ETH&tokenContractAddress=${tokenContractAddress}`,
      okLinkOptions
    );

    const { code, msg, data: jsonData } = await result.json();

    if (msg.length > 0) throw new Error(msg);

    if (jsonData.length == 0)
      throw new Error("Provided token contract address has no holders");

    const [{ positionList: data }] = jsonData;

    response = {
      data,
      error: "",
      success: true,
    };
  } catch (error) {
    response = {
      ...response,
      error: `${error}`,
    };
  } finally {
    return response;
  }
};

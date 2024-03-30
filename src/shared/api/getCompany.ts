import { $http } from "./$http.ts";

interface ICompanyData {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Interval": string;
    "5. Output Size": string;
    "6. Time Zone": string;
  };
  "Time Series (Daily)": {
    [key: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. volume": string;
    };
  };
}
export type OHLC = [string, number, number, number, number];

export const getCompany = async (ticker: string): Promise<OHLC[]> => {
  const response: ICompanyData = await $http
    .get("query", {
      searchParams: {
        function: "TIME_SERIES_DAILY",
        symbol: ticker,
      },
    })
    .json();

  return mapResponse(response);
};

const mapResponse = (response: ICompanyData): OHLC[] => {
  return Object.entries(response["Time Series (Daily)"]).map(([key, value]) => {
    return [
      key,
      Number(value["1. open"]),
      Number(value["2. high"]),
      Number(value["3. low"]),
      Number(value["4. close"]),
    ];
  });
};

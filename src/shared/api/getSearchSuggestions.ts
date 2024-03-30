import { $http } from "./$http.ts";
import { ICompany } from "../data/companies.ts";
const mockResponse: IStockSearchResult = {
  bestMatches: [
    {
      "1. symbol": "A",
      "2. name": "Agilent Technologies Inc",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-04",
      "8. currency": "USD",
      "9. matchScore": "1.0000",
    },
    {
      "1. symbol": "A02.FRK",
      "2. name": "Adways Inc",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.3333",
    },
    {
      "1. symbol": "A04.FRK",
      "2. name": "Ascential plc",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.3333",
    },
    {
      "1. symbol": "A07.FRK",
      "2. name": "AVANCE GAS HLDG DL 2",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.3333",
    },
    {
      "1. symbol": "A0H.FRK",
      "2. name": "AUXICO RESOURCES CANADA",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.3333",
    },
    {
      "1. symbol": "A0P.FRK",
      "2. name": "ARCTIC PAPER SA ZY 1",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.3333",
    },
    {
      "1. symbol": "A0T.FRK",
      "2. name": "American Tower Corp",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.3333",
    },
    {
      "1. symbol": "A0U.FRK",
      "2. name": "AZINCOURT URANIUM",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.3333",
    },
    {
      "1. symbol": "A0B0.FRK",
      "2. name": "AMALGAMATED FIN. DL-01",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.2857",
    },
    {
      "1. symbol": "A0I0.FRK",
      "2. name": "APPIA RARE EARTH+U O.N.",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.2857",
    },
  ],
};
interface IStockSearchResult {
  bestMatches: {
    "1. symbol": string;
    "2. name": string;
    "3. type": string;
    "4. region": string;
    "5. marketOpen": string;
    "6. marketClose": string;
    "7. timezone": string;
    "8. currency": string;
    "9. matchScore": string;
  }[];
}

export interface Info {
  information: string;
}

export interface IStockSearchSuggestion {
  symbol: string;
  name: string;
  currency: string;
  marketClose: string;
}

export const getSearchSuggestions = async (
  query: string,
): Promise<ICompany[] | Info> => {
  // const response: IStockSearchResult = await $http
  //   .get("query", {
  //     searchParams: {
  //       function: "SYMBOL_SEARCH",
  //       keywords: query,
  //     },
  //   })
  //   .json();

  // Alpha Vantage API limit is 25 per day. So I'm mocking the response to save quote while testing.
  const response = mockResponse;

  return mapper(response);
};

const mapper = (result: IStockSearchResult): ICompany[] => {
  return result.bestMatches.map((match) => ({
    stockTicker: match["1. symbol"],
    name: match["2. name"],
    imageUrl: `https://companiesmarketcap.com/img/company-logos/64/${match["1. symbol"]}.webp`,
    currency: match["8. currency"],
    marketClose: match["6. marketClose"],
  }));
};

import { $http } from "./$http.ts";
import { ICompany } from "../data/companies.ts";

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
  const response: IStockSearchResult = await $http
    .get("query", {
      searchParams: {
        function: "SYMBOL_SEARCH",
        keywords: query,
      },
    })
    .json();

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

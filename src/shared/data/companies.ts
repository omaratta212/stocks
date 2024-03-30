export const companies: ICompany[] = [
  {
    name: "Apple Inc.",
    stockTicker: "AAPL",
    imageUrl: "https://companiesmarketcap.com/img/company-logos/64/AAPL.webp",
  },
  {
    name: "Microsoft Corporation",
    stockTicker: "MSFT",
    imageUrl: "https://companiesmarketcap.com/img/company-logos/64/MSFT.webp",
  },
  {
    name: "Amazon.com Inc.",
    stockTicker: "AMZN",
    imageUrl: "https://companiesmarketcap.com/img/company-logos/64/AMZN.webp",
  },
  {
    name: "Alphabet Inc.",
    stockTicker: "GOOG",
    imageUrl: "https://companiesmarketcap.com/img/company-logos/64/GOOG.webp",
  },
  {
    name: "Meta Platforms, Inc.",
    stockTicker: "META",
    imageUrl: "https://companiesmarketcap.com/img/company-logos/64/META.webp",
  },
  {
    name: "Tesla, Inc.",
    stockTicker: "TSLA",
    imageUrl: "https://companiesmarketcap.com/img/company-logos/64/TSLA.webp",
  },
  {
    name: "Berkshire Hathaway Inc.",
    stockTicker: "BRK-B",
    imageUrl: "https://companiesmarketcap.com/img/company-logos/64/BRK-B.webp",
  },
  {
    name: "Walmart Inc.",
    stockTicker: "WMT",
    imageUrl: "https://companiesmarketcap.com/img/company-logos/64/WMT.webp",
  },
  {
    name: "JPMorgan Chase & Co.",
    stockTicker: "JPM",
    imageUrl: "https://companiesmarketcap.com/img/company-logos/64/JPM.webp",
  },
];

export interface ICompany {
  name: string;
  stockTicker: string;
  imageUrl: string;
  currency?: string;
  marketClose?: string;
}

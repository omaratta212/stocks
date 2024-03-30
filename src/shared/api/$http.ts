import ky from "ky";

export const $http = ky.create({
  prefixUrl: "https://www.alphavantage.co/",
  searchParams: {
    apikey: import.meta.env.VITE_API_KEY,
  },
});

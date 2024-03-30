import Highcharts from "highcharts";
import { OHLC } from "../api/getCompany.ts";

interface IHighChartsOptions {
  ohlc: OHLC[];
  ticker: string;
  darkMode: boolean;
}

export const getHighChartsOptions = (
  params: IHighChartsOptions,
): Highcharts.Options => ({
  plotOptions: {
    candlestick: {
      color: "pink",
      lineColor: "red",
      upColor: "lightgreen",
      upLineColor: "green",
    },
  },
  title: {
    text: `${params.ticker} Stock Price`,
  },
  rangeSelector: {
    selected: 1,
  },
  series: [
    {
      type: "candlestick",
      name: `${params.ticker} Stock Price`,
      data: params.ohlc,
    },
  ],
  chart: {
    height: 600,
  },
  navigator: {
    enabled: true,
  },
  tooltip: {
    xDateFormat: "%A, %b %e, %Y",
  },
  xAxis: {
    type: "datetime",
    labels: {
      enabled: false,
    },
  },
});

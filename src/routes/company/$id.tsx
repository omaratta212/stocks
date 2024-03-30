import { createFileRoute } from "@tanstack/react-router";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { getHighChartsOptions } from "../../shared/utils/highChartsOptions.ts";
import { useMemo } from "react";
import { getCompany } from "../../shared/api/getCompany.ts";
import { useQuery } from "react-query";
import { useDarkMode } from "usehooks-ts";

export const Route = createFileRoute("/company/$id")({
  component: Company,
  loader: async ({ params }) => ({
    ticker: params.id,
  }),
});

function Company() {
  const { ticker } = Route.useLoaderData();
  const { data: ohlc } = useQuery({
    queryKey: ["company", ticker],
    queryFn: () => getCompany(ticker),
  });

  const { isDarkMode } = useDarkMode();

  const options = useMemo(
    () => ohlc && getHighChartsOptions({ ohlc, ticker, darkMode: isDarkMode }),
    [isDarkMode, ohlc, ticker],
  );

  return (
    <div>
      <h1 className="text-4xl font-bold  my-8">{ticker} Stock</h1>
      {options && <HighchartsReact highcharts={Highcharts} options={options} />}
    </div>
  );
}

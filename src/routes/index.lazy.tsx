import { createLazyFileRoute } from "@tanstack/react-router";
import { companies } from "../shared/data/companies.ts";
import { CompanyCard } from "../shared/components/CompanyCard.tsx";
import { StockSearch } from "../shared/components/StockSearch.tsx";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1 className="text-4xl font-bold  mt-8 mb-3">Search Stocks</h1>
      <StockSearch />
      <h1 className="text-4xl font-bold  mt-8 mb-3">Popular Companies</h1>
      <div className="grid grid-cols-3 gap-4">
        {companies.map((company) => (
          <CompanyCard company={company} key={company.stockTicker} />
        ))}
      </div>
    </div>
  );
}

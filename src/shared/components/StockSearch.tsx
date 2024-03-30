import React, { useState } from "react";
import { useQuery } from "react-query";
import { getSearchSuggestions } from "../api/getSearchSuggestions.ts";
import { CompanyCard } from "./CompanyCard.tsx";

export const StockSearch = () => {
  const [query, setQuery] = useState("");

  const { data, isError } = useQuery({
    enabled: query.length > 0,
    queryKey: ["search", query],
    queryFn: () => getSearchSuggestions(query),
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by stock ticker..."
        className="w-full p-2 border-2 border-slate-300 dark:border-slate-700 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-slate-500 dark:focus:border-slate-400 transition duration-300 ease-in-out"
      />
      <div className="grid grid-cols-3 gap-4 mt-6">
        {Array.isArray(data) ? (
          data.map((company) => (
            <CompanyCard key={company.stockTicker} company={company} />
          ))
        ) : (
          <p>{data && data.information}</p>
        )}
      </div>
      {isError && <p>Error fetching data</p>}
    </div>
  );
};

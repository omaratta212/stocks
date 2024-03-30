import { FC } from "react";
import { ICompany } from "../data/companies.ts";
import { Link } from "@tanstack/react-router";

export const CompanyCard: FC<{ company: ICompany }> = ({ company }) => {
  return (
    <Link
      to="/company/$id"
      className="flex transform rounded-lg items-center border bg-white gap-4 p-4 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-50 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      params={{
        id: company.stockTicker,
      }}
    >
      <img
        src={company.imageUrl}
        alt={company.stockTicker}
        loading="lazy"
        className="h-16 w-16 rounded-md object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://sieg.cdmx.gob.mx/static/documents/png-placeholder.png";
        }}
      />
      <div>
        <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
          {company.name}
        </h2>
        <p>{company.stockTicker}</p>
      </div>
    </Link>
  );
};

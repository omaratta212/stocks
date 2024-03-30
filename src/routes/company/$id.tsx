import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/company/$id")({
  component: Company,
  loader: async ({ params }) => ({
    ticker: params.id,
  }),
});

function Company() {
  const { ticker } = Route.useLoaderData();
  return (
    <div>
      <h1 className="text-4xl font-bold  mt-8 mb-3">{ticker}</h1>
    </div>
  );
}

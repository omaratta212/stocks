import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/etfs")({
  component: Crypto,
});

function Crypto() {
  return <div className="p-2">ETFs data goes here!</div>;
}

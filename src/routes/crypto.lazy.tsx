import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/crypto")({
  component: Crypto,
});

function Crypto() {
  return <div className="p-2">Crypto data goes here!</div>;
}

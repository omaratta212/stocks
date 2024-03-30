import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/forex")({
  component: () => <div>Forex data goes here!</div>,
});

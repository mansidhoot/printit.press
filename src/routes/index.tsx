import { createFileRoute } from "@tanstack/react-router";
import { PortfolioHome } from "@/components/portfolio/PortfolioHome";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <PortfolioHome />;
}

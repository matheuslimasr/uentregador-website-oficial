import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";
export const Route = createFileRoute("/privacidade")({
  head: () => pageHead("/privacidade"),
  component: Page,
});
function Page() {
  return <ContentPage path="/privacidade" />;
}

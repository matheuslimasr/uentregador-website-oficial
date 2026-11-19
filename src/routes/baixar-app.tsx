import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";
export const Route = createFileRoute("/baixar-app")({
  head: () => pageHead("/baixar-app"),
  component: Page,
});
function Page() {
  return <ContentPage path="/baixar-app" />;
}

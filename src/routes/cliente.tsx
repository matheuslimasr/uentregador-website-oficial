import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";
export const Route = createFileRoute("/cliente")({
  head: () => pageHead("/cliente"),
  component: Page,
});
function Page() {
  return <ContentPage path="/cliente" />;
}

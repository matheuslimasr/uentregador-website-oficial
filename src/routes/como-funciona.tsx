import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";
export const Route = createFileRoute("/como-funciona")({
  head: () => pageHead("/como-funciona"),
  component: Page,
});
function Page() {
  return <ContentPage path="/como-funciona" />;
}

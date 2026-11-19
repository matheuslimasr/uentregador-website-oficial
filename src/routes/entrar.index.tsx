import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";
export const Route = createFileRoute("/entrar/")({
  head: () => pageHead("/entrar"),
  component: Page,
});
function Page() {
  return <ContentPage path="/entrar" />;
}

import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/site/forms";
import { pageHead } from "@/lib/site-config";
export const Route = createFileRoute("/recuperar-senha")({
  head: () => pageHead("/recuperar-senha"),
  component: Page,
});
function Page() {
  return <AuthPage recover />;
}

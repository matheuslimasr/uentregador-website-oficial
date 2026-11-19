import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/site/forms";
import { pageHead } from "@/lib/site-config";
export const Route = createFileRoute("/entrar/cliente")({
  head: () => pageHead("/entrar/cliente"),
  component: Page,
});
function Page() {
  return <AuthPage />;
}

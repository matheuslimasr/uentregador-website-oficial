import { describe, expect, it } from "vitest";
import { siteConfig } from "@/lib/site-config";
describe("Verified platform rules", () => {
  it("limits operation to São Paulo state", () => {
    expect(siteConfig.coverageStates).toEqual(["SP"]);
  });
  it("does not charge bicycle activation", () => {
    expect(siteConfig.bicycleActivationFee).toBe(0);
  });
  it("does not claim enabled vehicle categories without confirmation", () => {
    expect(siteConfig.enabledVehicles).toEqual([]);
  });
  it("does not expose unconfirmed iOS distribution", () => {
    expect(siteConfig.appIosUrl).toBeNull();
  });
  it("does not simulate existing platform authentication", () => {
    expect(siteConfig.authConnected).toBe(false);
  });
});

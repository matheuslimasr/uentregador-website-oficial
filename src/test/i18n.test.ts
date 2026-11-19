import { describe, expect, it } from "vitest";
import { toSource, translate } from "@/lib/i18n/translate";
describe("translation", () => {
  it("translates page titles part by part", () => {
    expect(translate("Veículos | U Entregador", "en")).toBe("Vehicles | U Entregador");
  });
  it("restores Portuguese from English", () => {
    expect(toSource("Vehicles | U Entregador")).toBe("Veículos | U Entregador");
  });
  it("keeps Portuguese untouched in pt", () => {
    expect(translate("Veículos", "pt")).toBe("Veículos");
  });
});

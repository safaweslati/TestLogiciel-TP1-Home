import { describe, fail, expect, it, test } from "vitest";
import { fetchTauxChange } from "../src/fetchTauxChange";

describe("fetchTauxChange()", () => {
  it("Récupération des taux de change depuis une API", async () => {
    try {
      const tauxChange = await fetchTauxChange("TND");
      expect(tauxChange).toBeDefined();
      expect(typeof tauxChange).toBe("object");
      expect(tauxChange).toHaveProperty("USD");
      expect(tauxChange).toHaveProperty("EUR");
    } catch (Error) {
      fail("Problem fetching data");
    }
  });
});

test("Récupération des taux de change - Devise non prise en charge", async () => {
  expect(fetchTauxChange()).rejects.toThrow("Failed to fetch data");
  expect(fetchTauxChange("INVALID")).rejects.toThrow("Failed to fetch data");
});

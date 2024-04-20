import { test, expect } from "vitest";
import { calculerTaxe } from "../src/calculerTaxe";

test("Calcul de la taxe sur la conversion", () => {
  const montantConverti = 120;
  const tauxTaxe = 0.05;
  const montantTotal = calculerTaxe(montantConverti, tauxTaxe);
  expect(montantTotal).toBe(126);
});

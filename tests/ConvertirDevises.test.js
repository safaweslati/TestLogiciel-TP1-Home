import { test, expect } from "vitest";
import { convertirDevises } from "../src/ConvertirDevises";

test("Conversion de devise - EUR", () => {
  const montant = 100;
  const tauxChange = { EUR: 0.297, USD: 0.317, AED: 1.16 };
  const montantConverti = convertirDevises(montant, tauxChange, "EUR");
  expect(montantConverti).toBe(29.7);
});

test("Conversion de devise - AED", () => {
  const montant = 100;
  const tauxChange = { EUR: 0.297, USD: 0.317, AED: 1.16 };
  const montantConverti = convertirDevises(montant, tauxChange, "AED");
  expect(montantConverti).toBeCloseTo(116);
});

test("Conversion de devise - USD", () => {
  const montant = 100;
  const tauxChange = { EUR: 0.297, USD: 0.317, AED: 1.16 };
  const montantConverti = convertirDevises(montant, tauxChange, "USD");
  expect(montantConverti).toBe(31.7);
});

test("Conversion de devise - SSD", () => {
  const montant = 100;
  const tauxChange = { EUR: 0.297, USD: 0.317, AED: 1.16 };
  expect(() => convertirDevises(montant, tauxChange, "SSD")).toThrow(
    "Devise de destination non prise en charge"
  );
});

test("Conversion de devise avec décimales", () => {
  const montant = 123.45;
  const tauxChange = { EUR: 0.297, USD: 0.317, AED: 1.16 };
  const montantConverti = convertirDevises(montant, tauxChange, "EUR");
  expect(montantConverti).toBeCloseTo(36.66);
});

test("Gestion des montants négatifs", () => {
  const montant = -100;
  const tauxChange = { EUR: 0.297, USD: 0.317, AED: 1.16 };
  expect(() => convertirDevises(montant, tauxChange, "EUR")).toThrow(
    "Montant invalide"
  );
});
test("Conversion de devises - Montant nul", () => {
  const montant = 0;
  const tauxChange = { EUR: 1, USD: 1.2, GBP: 0.8 };
  expect(() => convertirDevises(montant, tauxChange, "EUR")).toThrow(
    "Montant invalide"
  );
});

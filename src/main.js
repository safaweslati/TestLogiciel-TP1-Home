import { convertirDevises } from "./src/ConvertirDevises";
import { fetchTauxChange } from "./src/fetchTauxChange";

export async function main() {
  try {
    const montant = 100;
    const tauxChange = await fetchTauxChange("EUR");
    const montantConvertiUSD = convertirDevises(montant, tauxChange, "USD");

    const tauxTaxe = 0.05; // 5% de taxe
    const montantTotalUSD = calculerTaxe(montantConvertiUSD, tauxTaxe);

    console.log(`Montant total en USD (avec taxe): ${montantTotalUSD}`);
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
  }
}

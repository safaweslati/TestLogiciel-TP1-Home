export function convertirDevises(montant, tauxChange, deviseDestination) {
  if (typeof montant !== "number" || montant <= 0) {
    throw new Error("Montant invalide");
  }

  if (!(deviseDestination in tauxChange)) {
    throw new Error("Devise de destination non prise en charge");
  }

  const taux = tauxChange[deviseDestination];
  if (typeof taux !== "number" || taux <= 0) {
    throw new Error("Taux de change invalide");
  }

  return montant * taux;
}

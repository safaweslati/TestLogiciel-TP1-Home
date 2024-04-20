import fetch from "node-fetch";

export async function fetchTauxChange(deviseSource) {
  const response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${deviseSource}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.rates;
}

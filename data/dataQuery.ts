import { FilterType } from "../components/SearchDiv";
import { PriceRange } from "./infoFile";

export async function getDataFromQuery(query: queryType) {
  const res = await fetch("http://localhost:3000/api/getData/" + query);
  const data = await res.json();
  return data;
}

export async function getFilterProperties(filter: FilterType) {
  // TODO: add branch filter function
  const res = await fetch(
    "http://localhost:3000/api/filter/" +
      "all" +
      "/" +
      parseString(filter.type) +
      "/" +
      getPriceRangeInt(filter.price)
  );
  const data = await res.json();
  return data;
}
export async function getDateFromTableFiled(query: queryType, field: string) {
  const res = await fetch("http://localhost:3000/api/getData/" + query);
  const data = await res.json();
  const result = data.map((item: any) => item[field]);
  return result;
}

function parseString(str: string) {
  if (str.toLowerCase().includes("all")) {
    return "all";
  } else {
    return str;
  }
}

export function decodePriceRange(priceRangeInt: string): {
  gte?: number;
  lte?: number;
} {
  switch (priceRangeInt) {
    case "20000":
      return { gte: 0, lte: 20000 };
    case "40000":
      return { gte: 20000, lte: 40000 };
    case "60000":
      return { gte: 40000, lte: 60000 };
    case "100000":
      return { gte: 60000 };
    case "0":
      return {};
    default:
      throw new Error(`Invalid price range int: ${priceRangeInt}`);
  }
}

export function getPriceRangeInt(priceRange: PriceRange): number {
  switch (priceRange) {
    case "Under 20k":
      return 20000;
    case "20k - 40k":
      return 40000;
    case "40k - 60k":
      return 60000;
    case "60k above":
      return 100000;
    case "All Price":
      return 0;
    default:
      throw new Error(`Invalid price range: ${priceRange}`);
  }
}

export type queryType = "branch" | "owner" | "staff" | "property" | "client";
export type PropertyType = "Land" | "villa" | "Flat" | "All Types";

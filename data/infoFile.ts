export const FormType = [
  "Branch",
  "Client Interest",
  "Staff",
  "Client",
  "Property Review",
  "Property",
  "Lease",
];
export type formType =
  | "Client Interest"
  | "Staff"
  | "Client"
  | "Property Review"
  | "Property"
  | "Branch";
export const propertyType = ["All Types", "Land", "villa", "Flat"];

export const priceRange: PriceRange[] = [
  "Under 20k",
  "20k - 40k",
  "40k - 60k",
  "60k above",
];
export type PriceRange =
  | "Under 20k"
  | "20k - 40k"
  | "40k - 60k"
  | "60k above"
  | "All Price";

// Todo: query db for data
export const BranchList = ["cranch"];

export const FilterData = [propertyType, priceRange, BranchList];

export const PaymentType = ["Cash", "Others", "UPI"];

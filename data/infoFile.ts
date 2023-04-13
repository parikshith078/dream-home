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
export const PropertyType = ["Type", "Land", "House", "Falt"];

export const PriceRange = [
  "Price",
  "Under 20k",
  "20k - 40k",
  "40k - 60k",
  "60k above",
];

// Todo: query db for data
export const BranchList = ["Branch"];

export const FilterData = [PropertyType, PriceRange, BranchList];

export const PaymentType = ["Cash", "Others", "UPI"];

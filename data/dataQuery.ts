export async function getDataFromQuery(query: queryType) {
  const res = await fetch("http://localhost:3000/api/getData/" + query);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function getDateFromTableFiled(query: queryType, field: string) {
  const res = await fetch("http://localhost:3000/api/getData/" + query);
  const data = await res.json();
  const result = data.map((item: any) => item[field]);
  return result;
}

export type queryType = "branch" | "owner" | "staff" | "property" | "client";

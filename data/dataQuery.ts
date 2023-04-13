export async function getDataFromQuery(query: queryType) {
  const res = await fetch("http://localhost:3000/api/getData/" + query);
  const data = await res.json();
  console.log(data);
  return data;
}

type queryType = "branch" | "owner" | "staff" | "property" | "client";

import { getDataFromQuery } from "../../data/dataQuery";

async function page() {
  const data = await getDataFromQuery("branch");
  console.log(data);
  return <div>pagepage</div>;
}

export default page;

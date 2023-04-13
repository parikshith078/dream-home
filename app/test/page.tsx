import { getDataFromQuery } from "../../data/dataQuery";

async function page() {
  const data = await getDataFromQuery("staff");
  console.log(data);
  return <div>pagepage</div>;
}

export default page;

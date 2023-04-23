"use client";
import { useEffect, useState } from "react";
import QueryResultTable from "../../components/QueryResultTable";

async function fetchQueryResult(query: string) {
  const response = await fetch("http://localhost:3000/api/query/" + query);
  const data = await response.json();
  if (data.hasOwnProperty("error")) {
    return null;
  }
  return data["result"];
}

function EditorPage() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const getData = async (fish: string) => {
    const da = await fetchQueryResult(fish);
    if (da === null) {
      alert("Invalid query");
      return;
    }
    setData(da);
  };

  const handleClick = async () => {
    if (query === "") return;
    setLoading(true);
    console.log("handleClick");
    await getData(query);
    setLoading(false);
  };
  useEffect(() => {
    console.log("useEffect");
    getData("SELECT * FROM staff");
  }, []);
  return (
    <div className="max-w-6xl h-screen flex flex-col items-center w-full mx-auto gap-5 my-10">
      <h1 className="text-3xl font-bold text-center">Work bench</h1>
      <textarea
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Query"
        className="textarea textarea-bordered min-h-[150px] textarea-lg w-full max-w-lg  "
      ></textarea>
      <button
        disabled={loading}
        onClick={handleClick}
        className="btn btn-primary"
      >
        Submit
      </button>
      {data !== null && <QueryResultTable data={data} />}
    </div>
  );
}

export default EditorPage;

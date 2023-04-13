"use client";
import { useEffect, useState } from "react";
import { getDataFromQuery } from "../data/dataQuery";
function PropertyReviewForm() {
  const [propertyData, setPropertyData] = useState<any>([]);
  const [clientData, setClinetData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataFromQuery("property");
      setPropertyData(result);
      console.log(result);
      const result2 = await getDataFromQuery("client");
      setClinetData(result2);
      console.log(result2);
    };
    fetchData();
  }, []);

  const pid = propertyData.map((item) => item.pid);
  const cid = clientData.map((item) => item.cid);

  return (
    <>
      <h1 className="text-2xl font-bold my-4">Property Review </h1>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Property ID
        </option>
        {pid.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Client ID
        </option>
        {cid.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Comment"
        className="input w-full input-bordered max-w-xs"
      />

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Date of review</span>
        </label>
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button className="btn btn-primary w-[60%] text-lg my-5">Register</button>
    </>
  );
}

export default PropertyReviewForm;

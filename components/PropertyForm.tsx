"use client";
import { getDataFromQuery } from "../data/dataQuery";
import { useEffect, useState } from "react";
import { propertyType } from "../data/infoFile";

const PropertyForm = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataFromQuery("owner");
      setData(result);
    };
    fetchData();
  }, []);

  const ownerId = data.map((item) => item.oid);
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Property Register</h1>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Property Type
        </option>
        {propertyType.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="No of Rooms"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        type="number"
        placeholder="Renting price"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        type="text"
        placeholder="Address"
        className="input w-full input-bordered max-w-xs"
      />

      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Owner ID
        </option>
        {/*TODO: query woner ids form db*/}
        {ownerId.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <button className="btn btn-primary w-[60%] text-lg my-5">Register</button>
    </>
  );
};

export default PropertyForm;

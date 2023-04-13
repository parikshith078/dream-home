"use client";
import { getDataFromQuery } from "../data/dataQuery";
import { useEffect, useState } from "react";
import { PaymentType, PropertyType } from "../data/infoFile";

function LeaseForm() {
  const [data, setData] = useState<any>([]);
  const [propertyData, setPropertyData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataFromQuery("client");
      setData(result);
      const result2 = await getDataFromQuery("property");
      setPropertyData(result2);
    };
    fetchData();
  }, []);
  const clientName = data.map((item) => item.cname);
  const clientId = data.map((item) => item.cid);
  const propertyId = propertyData.map((item) => item.pid);
  {
    /*TODO:  calculate the ending date= starting + duration */
  }
  {
    /* TODO:  Dynamicaly select propertyType when property id is selected */
  }

  return (
    <>
      <h1 className="text-2xl font-bold my-4">Lease Form</h1>

      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Client Name
        </option>
        {clientName.map((info, id) => {
          return <option key={id}>{info}</option>;
        })}
      </select>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Client ID
        </option>
        {clientId.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Property ID
        </option>
        {propertyId.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Renting price"
        className="input w-full max-w-xs input-bordered"
      />
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Property Type
        </option>
        {PaymentType.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Deposite Made
        </option>
        <option>Yes</option>
        <option>No</option>
      </select>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Starting Date:</span>
        </label>
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <input
        type="number"
        placeholder="Duration in months"
        className="input w-full max-w-xs input-bordered"
      />
      <button className="btn btn-primary w-[60%] text-lg my-5">Register</button>
    </>
  );
}

export default LeaseForm;

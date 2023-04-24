"use client";
import { getDataFromQuery } from "../data/dataQuery";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { propertyType } from "../data/infoFile";

export interface PropertyFormType {
  propertyType: string;
  noOfRooms: number;
  rentPrice: number;
  address: string;
  regBy: any;
  regAt: any;
  ownerId: any;
  pid: any;
  date: any;
}

const PropertyForm = () => {
  const [propertyData, setPropertyData] = useState<PropertyFormType>({
    propertyType: "",
    noOfRooms: 0,
    rentPrice: 0,
    address: "",
    regBy: "",
    regAt: "",
    ownerId: "",
    pid: uuid(),
    date: "",
  });

  const handelClick = async () => {
    console.log("handelClick");
    console.log(propertyData);
    const data = await fetch("/api/mysql/postProperty", {
      method: "POST",
      body: JSON.stringify(propertyData),
    });
    const res = await data.json();
    console.log(res);
    if (res.hasOwnProperty("error")) {
      alert("Error adding property");
      return;
    }
    alert("Property added successfully");
    setPropertyData({
      propertyType: "",
      noOfRooms: 0,
      rentPrice: 0,
      address: "",
      regBy: "",
      regAt: "",
      ownerId: "",
      pid: "",
      date: "",
    });
  };

  const [ownerInfo, setData] = useState<any>([]);
  const [regBy, setRegBy] = useState<any>([]);
  const [branchs, setBranchs] = useState<any>([]);

  const handelChange = (e: any) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataFromQuery("owner");
      const res2 = await getDataFromQuery("staff");
      const res3 = await getDataFromQuery("branch");
      setRegBy(res2);
      setData(result);
      setBranchs(res3);
    };
    fetchData();
  }, []);

  const ownerId = ownerInfo.map((item) => item.oid);
  const registeredBy = regBy.map((item) => item.sid);
  const branchId = branchs.map((item) => item.bid);
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Property Register</h1>
      <select
        value={propertyData.propertyType}
        name="propertyType"
        onChange={(e) => {
          handelChange(e);
        }}
        className="select select-primary w-full max-w-xs"
      >
        <option disabled selected>
          Property Type
        </option>
        {propertyType.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <input
        value={propertyData.noOfRooms}
        name="noOfRooms"
        onChange={(e) => {
          handelChange(e);
        }}
        type="number"
        placeholder="No of Rooms"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        value={propertyData.rentPrice}
        name="rentPrice"
        onChange={(e) => {
          handelChange(e);
        }}
        type="number"
        placeholder="Renting price"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        value={propertyData.address}
        name="address"
        onChange={(e) => {
          handelChange(e);
        }}
        type="text"
        placeholder="Address"
        className="input w-full input-bordered max-w-xs"
      />
      <select
        value={propertyData.ownerId}
        name="ownerId"
        onChange={(e) => handelChange(e)}
        className="select select-primary w-full max-w-xs"
      >
        <option disabled selected>
          Owner ID
        </option>
        {/*TODO: query woner ids form db*/}
        {ownerId.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <select
        value={propertyData.regBy}
        name="regBy"
        onChange={(e) => handelChange(e)}
        className="select select-primary w-full max-w-xs"
      >
        <option disabled selected>
          Registered by
        </option>
        {/*TODO: query woner ids form db*/}
        {registeredBy.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>{" "}
      <select
        value={propertyData.regAt}
        name="regAt"
        onChange={(e) => handelChange(e)}
        className="select select-primary w-full max-w-xs"
      >
        <option disabled selected>
          Registered At
        </option>
        {/*TODO: query woner ids form db*/}
        {branchId.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>{" "}
      <input
        type="date"
        onChange={(e) => {
          handelChange(e);
        }}
        name="date"
        value={propertyData.date}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <button
        onClick={handelClick}
        className="btn btn-primary w-[60%] text-lg my-5"
      >
        Register
      </button>
    </>
  );
};

export default PropertyForm;

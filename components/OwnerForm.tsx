"use client";
import { uuid } from "uuidv4";
import { useState } from "react";

export interface OwnerFormType {
  oid: any;
  ownerName: string;
  address: string;
  phone: number;
}

const OwnerForm = () => {
  const [ownerData, setOwnerData] = useState<OwnerFormType>({
    oid: uuid(),
    ownerName: "Owner Name",
    address: "address",
    phone: 0,
  });

  const handelClick = async () => {
    console.log("handelClick");
    console.log(ownerData);
    const data = await fetch("/api/mysql/postOwner", {
      method: "POST",
      body: JSON.stringify(ownerData),
    });
    const res = await data.json();
    console.log(res);
    if (res.hasOwnProperty("error")) {
      alert("Error adding");
      return;
    }
    alert("Owner added successfully");
    setOwnerData({
      oid: uuid(),
      ownerName: "Owner Name",
      address: "address",
      phone: 0,
    });
  };

  const handelChange = (e: any) => {
    const { name, value } = e.target;
    setOwnerData({ ...ownerData, [name]: value });
  };
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Owner Registration</h1>
      <input
        type="text"
        name="ownerName"
        value={ownerData.ownerName}
        onChange={(e) => {
          handelChange(e);
        }}
        placeholder="Full Name"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        type="text"
        name="address"
        value={ownerData.address}
        onChange={(e) => {
          handelChange(e);
        }}
        placeholder="Address"
        className="input w-full max-w-xs input-bordered"
      />

      <input
        type="number"
        name="phone"
        value={ownerData.phone}
        onChange={(e) => {
          handelChange(e);
        }}
        placeholder="Phone Number"
        className="input w-full max-w-xs input-bordered"
      />

      {/* TODO: autogen bussiness ID */}
      <button
        onClick={handelClick}
        className="btn btn-primary w-[60%] text-lg my-5"
      >
        Register
      </button>
    </>
  );
};

export default OwnerForm;
// export

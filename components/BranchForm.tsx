"use client";
import { uuid } from "uuidv4";
import { useState } from "react";
import prisma from "../prisma/client";

interface BranchFormType {
  address: string;
  telephone: number;
  location: string;
  managerName: string;
  managerDOB: any;
  managerSalary: number;
  managerGender: string;
  managerStartDate: any;
  bonus: number;
}

const BranchForm = () => {
  const branchId = uuid();
  const ssid = null;
  const sid = uuid();
  const mid = uuid();
  const id = uuid();
  const position = "Manager";

  const [branchData, setBranchData] = useState<BranchFormType>({
    address: "",
    telephone: 0,
    location: "",
    managerName: "",
    managerDOB: "",
    managerSalary: 0,
    managerGender: "",
    managerStartDate: "",
    bonus: 0,
  });

  const handelChange = (e: any) => {
    const { name, value } = e.target;
    setBranchData({ ...branchData, [name]: value });
  };

  // TODO: Only access to manager
  return (
    <>
      <h1 className="text-2xl font-bold my-4">
        Branch and Manager Registration
      </h1>
      <input
        value={branchData.address}
        name="address"
        onChange={(e) => {
          handelChange(e);
        }}
        type="text"
        placeholder="Address"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        value={branchData.telephone}
        name="telephone"
        onChange={(e) => {
          handelChange(e);
        }}
        type="number"
        placeholder="Branch Telephone number"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        value={branchData.location}
        name="location"
        onChange={(e) => {
          handelChange(e);
        }}
        type="text"
        placeholder="Location"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        value={branchData.managerName}
        name="managerName"
        onChange={(e) => {
          handelChange(e);
        }}
        type="text"
        placeholder="Name of Manager"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Date of Birth of Manager:</span>
        </label>
        <input
          value={branchData.managerDOB}
          name="managerDOB"
          onChange={(e) => {
            handelChange(e);
          }}
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <input
        value={branchData.managerSalary}
        name="managerSalary"
        onChange={(e) => {
          handelChange(e);
        }}
        type="number"
        placeholder="Salary of Manager"
        className="input w-full max-w-xs input-bordered"
      />{" "}
      <input
        value={branchData.bonus}
        name="bonus"
        onChange={(e) => {
          handelChange(e);
        }}
        type="number"
        placeholder="Manager's bonus"
        className="input w-full max-w-xs input-bordered"
      />
      <select
        name="managerGender"
        onChange={(e) => {
          handelChange(e);
        }}
        value={branchData.managerGender}
        className="select select-primary w-full max-w-xs"
      >
        <option disabled selected className=" font-light">
          Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Date of start of Manager:</span>
        </label>
        <input
          type="date"
          onChange={(e) => {
            handelChange(e);
          }}
          name="managerStartDate"
          value={branchData.managerStartDate}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button className="btn btn-primary w-[60%] text-lg my-5">Register</button>
    </>
  );
};

export default BranchForm;

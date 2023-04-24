"use client";
import { getDataFromQuery } from "../data/dataQuery";
import { useState, useEffect } from "react";

import { FC } from "react";
import { uuid } from "uuidv4";

export interface StaffFormType {
  name: string;
  dob: any;
  gender: "F" | "M";
  position: string;
  ssid: any;
  sid: any;
  mid: any;
  salary: number;
}

const StaffFrom: FC<{}> = () => {
  const [data, setData] = useState<any>([]);
  const [staffData, setStaffData] = useState<StaffFormType>({
    name: "Name",
    dob: "",
    gender: "M",
    position: "",
    ssid: "",
    sid: uuid(),
    mid: "",
    salary: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataFromQuery("staff");
      setData(result);
    };
    fetchData();
  }, []);

  const handelClick = async () => {
    console.log("handelClick");
    console.log(staffData);
    const data = await fetch("/api/mysql/postStaff", {
      method: "POST",
      body: JSON.stringify(staffData),
    });
    const res = await data.json();
    console.log(res);
    if (res.hasOwnProperty("error")) {
      alert("Error adding ");
      return;
    }
    alert("Staff added successfully");
    setStaffData({
      name: "Name",
      dob: "",
      gender: "M",
      position: "",
      ssid: "",
      sid: uuid(),
      mid: "",
      salary: 0,
    });
  };

  const handelChange = (e: any) => {
    const { name, value } = e.target;
    setStaffData({ ...staffData, [name]: value });
  };

  const supervisors = data.filter(
    (employee) => employee.position === "Supervisor"
  );

  const managers = data.filter((employee) => employee.position === "Manager");

  const supervisorNames = supervisors.map((supervisor) => supervisor.sid);
  const managerNames = managers.map((manager) => manager.mid);
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Staff Registration</h1>
      <input
        value={staffData.name}
        onChange={(e) => {
          handelChange(e);
        }}
        name="name"
        type="text"
        placeholder="Name"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Date of Birth:</span>
        </label>
        <input
          value={staffData.dob}
          onChange={(e) => {
            handelChange(e);
          }}
          name="dob"
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <select
        onClick={(e) => {
          handelChange(e);
        }}
        value={staffData.gender}
        name="gender"
        className="select select-primary w-full max-w-xs"
      >
        <option disabled selected className=" font-light">
          Gender
        </option>
        <option>M</option>
        <option>F</option>
      </select>
      <select
        onClick={(e) => {
          handelChange(e);
        }}
        value={staffData.position}
        name="position"
        className="select select-primary w-full max-w-xs"
      >
        <option disabled selected>
          Position
        </option>
        <option>Assistant</option>
        <option>Supervisor</option>
      </select>
      {/*      // TODO: Condtionaly block supervisor and manager. */}
      <select
        onClick={(e) => {
          handelChange(e);
        }}
        value={staffData.ssid}
        name="ssid"
        className="select select-primary w-full max-w-xs"
      >
        <option disabled selected>
          Supervisor
        </option>
        {supervisorNames.map((name, id) => (
          <option key={id}>{name} </option>
        ))}
      </select>
      <select
        onClick={(e) => {
          handelChange(e);
        }}
        value={staffData.mid}
        name="mid"
        className="select select-primary w-full max-w-xs"
      >
        <option disabled selected>
          Manager
        </option>
        {managerNames.map((name, id) => {
          return <option key={id}>{name} </option>;
        })}
      </select>
      <input
        value={staffData.salary}
        onChange={(e) => {
          handelChange(e);
        }}
        name="salary"
        type="number"
        placeholder="Salary"
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

export default StaffFrom;

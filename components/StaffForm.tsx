"use client";
import { getDataFromQuery } from "../data/dataQuery";
import { useState, useEffect } from "react";

import { FC } from "react";

const StaffFrom: FC<{}> = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataFromQuery("staff");
      setData(result);
    };
    fetchData();
  }, []);
  const supervisors = data.filter(
    (employee) => employee.position === "Supervisor"
  );

  const managers = data.filter((employee) => employee.position === "Manager");

  const supervisorNames = supervisors.map((supervisor) => supervisor.name);
  const managerNames = managers.map((manager) => manager.name);
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Staff Registration</h1>
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered input-primary w-full max-w-xs"
        name="name"
      />
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Date of Birth:</span>
        </label>
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected className=" font-light">
          Gender
        </option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Position
        </option>
        <option>Assistant</option>
        <option>Supervisor</option>
      </select>
      {/*      // TODO: Condtionaly block supervisor and manager. */}
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Supervisor
        </option>
        {supervisorNames.map((name, id) => (
          <option key={id}>{name} </option>
        ))}
      </select>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Manager
        </option>
        {managerNames.map((name, id) => {
          return <option key={id}>{name} </option>;
        })}
      </select>
      <input
        type="number"
        placeholder="Salary"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="SSID"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-primary w-[60%] text-lg my-5">Register</button>
    </>
  );
};

export default StaffFrom;

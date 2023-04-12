"use client";

import { FC } from "react";

const StaffFrom: FC<{}> = () => {
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
          Sex
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
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Supervisor
        </option>
        {/* TODO: query form db */}
        <option>Game </option>
        <option>Lost</option>
        <option>Breaking </option>
        <option>Walking </option>
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

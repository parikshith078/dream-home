import { BranchList, PropertyType } from "../data/infoFile";

const ClientInterestForm = () => {
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Client Interest</h1>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Property Type
        </option>
        {PropertyType.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      {/* TODO: Auto fill upon branch name Selection */}
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Branch name
        </option>
        {/* TODO: Query for db for branch info */}
        {BranchList.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Branch Id
        </option>
        {/* TODO: Query for db for branch info */}
        {BranchList.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Rent"
        className="input w-full max-w-xs input-bordered"
      />

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Date:</span>
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
};

export default ClientInterestForm;
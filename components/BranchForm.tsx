const BranchForm = () => {
  // TODO: Only access to manager
  return (
    <>
      <h1 className="text-2xl font-bold my-4">
        Branch and Manager Registration
      </h1>
      {/* TODO: Branch Id auto gen  */}
      <input
        type="text"
        placeholder="Address"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        type="number"
        placeholder="Branch Telephone number"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        type="text"
        placeholder="Name of Manager"
        className="input input-bordered input-primary w-full max-w-xs"
        name="name"
      />
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Date of Birth of Manager:</span>
        </label>
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <input
        type="number"
        placeholder="Salary of Manager"
        className="input w-full max-w-xs input-bordered"
      />
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected className=" font-light">
          Sex of Manager
        </option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Date of start of Manager:</span>
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

export default BranchForm;

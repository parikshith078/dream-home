const OwnerForm = () => {
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Owner Registration</h1>
      <input
        type="text"
        placeholder="Full Name"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        type="text"
        placeholder="Address"
        className="input w-full max-w-xs input-bordered"
      />

      <input
        type="number"
        placeholder="Phone Number"
        className="input w-full max-w-xs input-bordered"
      />

      <select className="select select-primary w-full max-w-xs">
        <option disabled defaultValue="test" selected className=" font-light">
          Is Business Owner
        </option>
        <option>Yes</option>
        <option>No</option>
      </select>

      {/* TODO: Show only on bunisness is ture */}
      <input
        type="text"
        placeholder="Business type"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        type="number"
        placeholder="Telephone numbers"
        className="input w-full max-w-xs input-bordered"
      />
      {/* TODO: autogen bussiness ID */}
      <button className="btn btn-primary w-[60%] text-lg my-5">Register</button>
    </>
  );
};

export default OwnerForm;
// export

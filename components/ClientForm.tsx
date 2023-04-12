const ClientForm = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Client Name"
        className="input w-full max-w-xs input-bordered "
      />
      <button className="btn btn-primary w-[60%] text-lg my-5">Register</button>
    </>
  );
};

export default ClientForm;

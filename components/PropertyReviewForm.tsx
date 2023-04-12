function PropertyReviewForm() {
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Property Register</h1>
      <input
        type="text"
        placeholder="Comment"
        className="input w-full input-bordered max-w-xs"
      />

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Date of review</span>
        </label>
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </>
  );
}

export default PropertyReviewForm;

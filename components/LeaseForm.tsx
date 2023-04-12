import { PaymentType, PropertyType } from "../data/infoFile";

function LeaseForm() {
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Lease Form</h1>
      {/*TODO: query client names form form db and auto file client ID*/}

      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Client Name
        </option>
        {PropertyType.map((info, id) => {
          return <option key={id}>{info}</option>;
        })}
      </select>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Client ID
        </option>
        {PropertyType.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Renting price"
        className="input w-full max-w-xs input-bordered"
      />
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Property Type
        </option>
        {PaymentType.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Deposite Made
        </option>
        <option>Yes</option>
        <option>No</option>
      </select>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Starting Date:</span>
        </label>
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <input
        type="number"
        placeholder="Duration in months"
        className="input w-full max-w-xs input-bordered"
      />
    </>
  );
}

export default LeaseForm;

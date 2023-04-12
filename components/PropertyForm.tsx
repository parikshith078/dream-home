import { PropertyType } from "../data/infoFile";

const PropertyForm = () => {
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Property Register</h1>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Property Type
        </option>
        {PropertyType.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="No of Rooms"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        type="number"
        placeholder="Renting price"
        className="input w-full max-w-xs input-bordered"
      />
      <input
        type="text"
        placeholder="Address"
        className="input w-full input-bordered max-w-xs"
      />

      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Owner ID
        </option>
        {/*TODO: query woner ids form db*/}
        {PropertyType.map((info, id) => (
          <option key={id}>{info}</option>
        ))}
      </select>
    </>
  );
};

export default PropertyForm;

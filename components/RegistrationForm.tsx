import { FC } from "react";

const INPUT_INFO = [true, false, true, true, true, false, true, true];

const RegistrationForm: FC<{
  title: string;
}> = ({ title }) => {
  return (
    <div className="flex justify-center w-full xs:mt-5 lg:mt-10">
      <div className="flex border-solid border-[1px] mx-10 lg:mx-96 xs:mx-2 px-2 border-white shadow-lg rounded-lg flex-col items-center w-full gap-3 py-4 ">
        <h1 className="text-2xl font-bold my-4">{title}</h1>
        {INPUT_INFO.map((data, id) =>
          data ? (
            <input
              key={id}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          ) : (
            <select
              key={id}
              defaultValue="text"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Position
              </option>
              <option>Supervisor</option>
              <option>Staff</option>
            </select>
          )
        )}
        <button className="btn btn-primary w-[60%] text-lg my-5">
          Register{" "}
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;

import { FC } from "react";
import ConditionalRendering from "./ConditionalRendering";
import { FormType } from "../data/infoFile";

const RegistrationForm: FC<{
  query: number;
}> = ({ query }) => {
  return (
    <div className="flex justify-center w-full xs:mt-5 lg:mt-10">
      <div className="flex border-solid border-[1px] mx-10 lg:mx-96 xs:mx-2 px-2 border-white shadow-lg rounded-lg flex-col items-center w-full gap-3 py-4 ">
        <ConditionalRendering query={FormType[query]} />
      </div>
    </div>
  );
};

export default RegistrationForm;

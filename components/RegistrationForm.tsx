import { FC } from "react";
import ClientForm from "./ClientForm";
import StaffFrom from "./StaffForm";
import ClientInterestForm from "./ClientInterestForm";
import BranchForm from "./BranchForm";
import OwnerForm from "./OwnerForm";
import PropertyForm from "./PropertyForm";
import PropertyReviewForm from "./PropertyReviewForm";
import LeaseForm from "./LeaseForm";

const INPUT_INFO = [true, false, true, true, true, false, true, true];

const RegistrationForm: FC<{
  title: string;
}> = ({ title }) => {
  return (
    <div className="flex justify-center w-full xs:mt-5 lg:mt-10">
      <div className="flex border-solid border-[1px] mx-10 lg:mx-96 xs:mx-2 px-2 border-white shadow-lg rounded-lg flex-col items-center w-full gap-3 py-4 ">
        {/* <ClientForm /> */}
        {/* <StaffFrom /> */}
        {/* <ClientInterestForm /> */}
        {/* <OwnerForm /> */}
        {/* <BranchForm /> */}

        {/* <OwnerForm /> */}
        {/* <PropertyForm /> */}
        <LeaseForm />
      </div>
    </div>
  );
};

export default RegistrationForm;

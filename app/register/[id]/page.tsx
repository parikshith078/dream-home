import RegistrationForm from "../../../components/RegistrationForm";
import StaffFrom from "../../../components/StaffForm";
import { FromType } from "../../../data/infoFile";

export default function FormPage({ params }: any) {
  const { id } = params;
  return (
    <>
      {/* <RegistrationForm title={FromType[id]} /> */}
      <StaffFrom title={FromType[id]} />
    </>
  );
}

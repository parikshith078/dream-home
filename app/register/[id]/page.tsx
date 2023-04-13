import ClientForm from "../../../components/ClientForm";
import RegistrationForm from "../../../components/RegistrationForm";
import StaffFrom from "../../../components/StaffForm";
import { FromType } from "../../../data/infoFile";

export default function FormPage({ params }: any) {
  const { id } = params;
  return (
    <>
      <RegistrationForm query={id} />
      {/* <StaffFrom ={FromType[id]} /> */}
      {/* <ClientForm /> */}
    </>
  );
}

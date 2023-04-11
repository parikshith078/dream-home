import RegistrationForm from "../../../components/RegistrationForm";
import { FormTypes } from "../../../data/infoFile";

export default function FormPage({ params }: any) {
  const { id } = params;
  return (
    <>
      <RegistrationForm title={FormTypes[id]} />
    </>
  );
}

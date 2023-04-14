import RegistrationForm from "../../../components/RegistrationForm";

export default function FormPage({ params }: any) {
  const { id } = params;
  return (
    <>
      <RegistrationForm query={id} />
    </>
  );
}

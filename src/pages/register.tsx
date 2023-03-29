import Footer from "@/components/Footer";
import Hoc from "@/components/Hoc";
import NavBar from "@/components/NavBar";
import RegistrationForm from "@/components/RegistrationForm";

const register = () => {
  return (
    <Hoc>
      <RegistrationForm title="Staff Registration" />
    </Hoc>
  );
};

export default register;

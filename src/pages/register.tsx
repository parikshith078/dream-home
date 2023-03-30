import Hoc from "@/components/Hoc";
import RegistrationForm from "@/components/RegistrationForm";

// write a array of 1-10 for testing purpose
const INPUT_INFO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const register = () => {
  return (
    <Hoc>
      <RegistrationForm title="Staff Reg" />
    </Hoc>
  );
};

export default register;

// src/components/Hoc/index.tsx
{
  /* <div className=" flex justify-evenly mx-20 my-10">
{INPUT_INFO.map((data, id) => (
  <button key={id} className="btn btn-square">
    {data}
  </button>
))}
</div> */
}

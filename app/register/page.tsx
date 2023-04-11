import MainBtn from "../../components/MianBtn";
import { FromType } from "../../data/infoFile";

const RegisterPage = () => {
  return (
    <div className=" w-full  xs:h-[80%] lg:mt-10 xs:mt-40 p-10 flex lg:flex-wrap justify-center lg:flex-row xs:flex-col gap-3">
      {FromType.map((txt, id) => (
        <MainBtn
          style="btn-secondary"
          link={`register/${id}`}
          text={txt}
          key={id}
        />
      ))}
    </div>
  );
};

export default RegisterPage;

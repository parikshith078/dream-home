import MainBtn from "../components/MianBtn";

const HomePage = () => {
  return (
    <div className=" w-full  xs:h-[80%] mt-10 p-10 flex justify-center lg:flex-row xs:flex-col gap-3">
      <MainBtn text="Search" style="btn-primary " link="search" />
      <MainBtn text="Register" style="btn-secondary " link="register" />
      <MainBtn text="Lease" style="btn-accent " link={`register/${6}`} />
    </div>
  );
};

export default HomePage;

//TODO: lease index is set as 10

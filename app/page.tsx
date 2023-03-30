import { FC } from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className=" w-full  xs:h-[80%] mt-10 p-10 flex justify-center lg:flex-row xs:flex-col gap-3">
      <MainBtn text="Search" style="btn-primary " link="search" />
      <MainBtn text="Register" style="btn-secondary " link="register" />
      <MainBtn text="Lease" style="btn-accent " link="lease" />
    </div>
  );
};

export default HomePage;

const MainBtn: FC<{ text: string; style: string; link: string }> = ({
  text,
  style,
  link,
}) => (
  <Link
    className={`${style} lg:w-[30%]  xs:w-full h-[30%] rounded-md btn text-2xl`}
    href={`/${link}`}
  >
    {text}
  </Link>
);

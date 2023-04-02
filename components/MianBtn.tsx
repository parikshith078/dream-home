import { FC } from "react";
import Link from "next/link";

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

export default MainBtn;

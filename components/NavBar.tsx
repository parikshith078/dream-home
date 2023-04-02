import Image from "next/image";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { LeaseIndex } from "../data/infoFile";

const NavBar = () => {
  return (
    <div className="navbar bg-primary text-primary-content fixed top-0 z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link href="/register">Register</Link>
            </li>
            <li>
              <Link href={`/register/${LeaseIndex}`}>Lease</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Dream Home
        </Link>
      </div>
      <div className="navbar-end gap-2">
        <Link href="/search" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Link>
        <Link
          href="/profile"
          className="btn btn-ghost btn-circle text-lg bg-primary "
        >
          <FaUserAlt />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

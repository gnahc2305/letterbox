import Link from "next/link";
import React from "react";

import { MdLocalMovies } from "react-icons/md";

import { SignInButton, SignOutButton } from "./buttons";
import { Input } from "./ui/input";
import SearchBar from "./searchbar";

const DashboardNavbar = () => {
  return (
    <div className="flex justify-between items-center m-5">
      <Link href="/">
        {/* add movie icon */}
        <MdLocalMovies size={50} />
      </Link>

      <SearchBar />

      {/* add borgir menu for account */}
      <div className="flex text-xl space-x-3">
        <SignInButton />
        <SignOutButton />
      </div>
    </div>
  );
};

export default DashboardNavbar;

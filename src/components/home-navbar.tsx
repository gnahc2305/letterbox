import React from "react";
import { SignInButton, SignOutButton } from "./buttons";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <div className="flex m-5">
      <Link href="/">
        <h1 className="text-4xl">Movie Tracker</h1>
      </Link>

      {/* if the user is signed on the home page add a dashboard link */}
      <div className="flex ml-auto text-xl items-center space-x-3">
        <Link href="/dashboard">
          <h2>Dashboard</h2>
        </Link>
        <SignInButton />
        <SignOutButton />
      </div>
    </div>
  );
};

export default HomeNavbar;

import Link from 'next/link'
import React from 'react'

import { MdLocalMovies } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import { SignInButton, SignOutButton } from "./buttons";
import { Input } from './ui/input';

const DashboardNavbar = () => {
  return (
    <div className="flex justify-between items-center m-5">
      <Link href="/">
        {/* add movie icon */}
        <MdLocalMovies size={50} />
      </Link>

      <div className='flex items-center space-x-1 w-[500px]'>
        <Input type="text" placeholder="Search" />
        {/* <FaSearch size={30} color='gray' /> */}
      </div>

      {/* add borgir menu for account */}
      <div className="flex text-xl space-x-3">
        <SignInButton />
        <SignOutButton />
      </div>
    </div>
  )
}

export default DashboardNavbar
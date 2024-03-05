import { SignInButton, SignOutButton } from "@/components/buttons";
import axios from "axios";
import { getServerSession } from "next-auth";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { authOptions } from "./api/auth/[...nextauth]/route";
import HomeNavbar from "@/components/home-navbar";

export default function Home() {
  return (
    <div>
      <HomeNavbar />
    </div>
  );
}

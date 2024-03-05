import { SignInButton, SignOutButton } from "@/components/buttons";
import axios from "axios";
import { getServerSession } from "next-auth";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { authOptions } from "./api/auth/[...nextauth]/route";
import HomeNavbar from "@/components/home-navbar";

export default function Home() {
  // if (!session) {
  //   redirect("/api/auth/signin");
  // }

  // const [media, setMedia] = useState("");

  // async function test(query: string) {
  //   const options = {
  //     method: "GET",
  //     url: "https://imdb8.p.rapidapi.com/title/find",
  //     params: {
  //       q: query,
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  //       "X-RapidAPI-Host": process.env.RAPID_API_HOST,
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data.results[0]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // test('succecion');

  return (
    <div>
      <HomeNavbar />
    </div>
  );
}

import { SignInButton, SignOutButton } from "@/components/buttons";
import axios from "axios";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
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
      <div>
        <h1>Movie Tracker</h1>
        <div>
          <li>
            <SignInButton />
          </li>
          <li>
            <SignOutButton />
          </li>
        </div>
      </div>
    </div>
  );
}

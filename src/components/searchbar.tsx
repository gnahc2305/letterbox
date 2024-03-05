"use client";

import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { Input } from "./ui/input";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  async function fetchApi(query: string) {
    // format string to URI (%20)
    let formattedString = encodeURIComponent(query);

    const options = {
      method: "GET",
      url: `https://imdb207.p.rapidapi.com/title/${formattedString}`,
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function onChange(e: any) {
    setQuery(e.target.value);
  }

  function onSubmit(e: any) {
    e.preventDefault();
    let formattedQuery = encodeURIComponent(query);
    router.push(`/${formattedQuery}`)
  }

  return (
    <div className="">
      <form
        onSubmit={onSubmit}
        className=" w-[400px] flex items-center space-x-1"
      >
        <Input type="text" placeholder="Search" onChange={onChange} />
        <button>
          <FaSearch size={25} color="grey" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

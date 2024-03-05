import React from "react";
import axios from "axios";

import DashboardNavbar from "@/components/dashboard-navbar";

interface SearchPageProps {
  params: {
    query: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = async ({ params }) => {
  const { query } = params;

  const options = {
    method: "GET",
    url: `https://imdb207.p.rapidapi.com/title/${query}`,
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

  return (
    <div>
      <DashboardNavbar />
      search page
    </div>
  );
};

export default SearchPage;

// 'use client';

import React from "react";
import axios from "axios";

import DashboardNavbar from "@/components/dashboard-navbar";
import QueryCard from "./components/query-card";

interface SearchPageProps {
  params: {
    query: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = async ({ params }) => {
  const { query } = params;
  let results;

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
      results = response.data;
      console.log(results.status);
      // console.log(results.result); this shows the array of results
      // showing the first result
      //.poster is for the image
    } catch (error) {
      console.error(error);
    }

    console.log(results.result);
  return (
    <div>
      <DashboardNavbar />
      <div>
        {results.result.map((res: any) => (
            <QueryCard key={res.imdb_id} title={res.title} type={res.type} img={res.poster} id={res.imdb_id} />
        ))}
        {/* <QueryCard
          title="Dune"
          type="Movie"
          img="https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNGQzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX3000.jpg"
        /> */}
      </div>
    </div>
  );
};

export default SearchPage;

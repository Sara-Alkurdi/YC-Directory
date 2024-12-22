"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SearchForm from "../components/SearchForm";

export default async function Home(
) {
  
  const searchParams = useSearchParams();
  const query = searchParams.get("query"); // Extract the "query" param

  console.log(query);

 console.log(query)
   
  return (
      <>
        <section className="pink_container">

        <h1 className="heading">Pitch Your Startup, <br /> Connect With 
        Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl ">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>


        <SearchForm  query={""}/>

        </section>


      
       </>
  );
}

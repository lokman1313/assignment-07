"use client"
import Card from "@/components/card/Card";
import { useEffect, useState } from "react";

const Home = () => {
  const [frinds, setFrinds] = useState([]);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => setFrinds(data));
  }, []);

 

  return (
    <div className=" w-10/12 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
        <p className="text-gray-500 font-semibold">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
        relationships that matter most.</p>
      </div>
      <div className="my-7">
      <h2 className="text-2xl font-bold py-2">Your Friends</h2>
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 ">
      {frinds.map(frind => (
        <Card key={frind.id} frind={frind}></Card>
      ))}
     </div>
      </div>
    </div>
  );
};

export default Home;
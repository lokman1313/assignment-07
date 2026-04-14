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
      <h1>this is root</h1>
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {frinds.map(frind => (
        <Card key={frind.id} frind={frind}></Card>
      ))}
     </div>
    </div>
  );
};

export default Home;
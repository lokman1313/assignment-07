"use client"
import Card from "@/components/card/Card";
import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";

const Home = () => {
  const [frinds, setFrinds] = useState([]);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => setFrinds(data));
  }, []);

 

  return (
    <div className=" w-10/12 mx-auto">
      <div className="text-center space-y-4 mt-8">
        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
        <p className="text-gray-500 font-semibold">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
        relationships that matter most.</p>
        <button className="btn bg-[#244D3F] text-white"><LuPlus /> Add a Friend</button>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <div className="shadow-sm py-15">
            <h2 className="text-4xl font-bold">{frinds.length}</h2>
            <p className="text-gray-500">Total Friends</p>
          </div>
          <div className="shadow-sm py-15">
            <h2 className="text-4xl font-bold">{frinds.filter(f => f.status === 'on-track').length}</h2>
            <p className="text-gray-500">On Track</p>
          </div>
          <div className="shadow-sm py-15">
            <h2 className="text-4xl font-bold">{frinds.filter(f => f.status === "almost due").length}</h2>
            <p className="text-gray-500">Need Attention</p>
          </div>
          <div className="shadow-sm py-15">
            <h2 className="text-4xl font-bold">{frinds.filter(f => f.status === "overdue" ).length}</h2>
            <p className="text-gray-500">Interactions This Month</p>
          </div>
        </div>
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
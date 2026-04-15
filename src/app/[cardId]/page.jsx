import Card from "@/components/card/Card";
import InterectivitiToggolBtn from "@/components/intarectiviti/InterectivitiToggolBtn";
import Image from "next/image";
import { RiArchiveLine, RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";

const frindsData = async () =>{
    const res = await fetch ('https://assignment-07-nu.vercel.app//friends.json',{ cache:'no-store'});
    const data = await res.json();
    return data;
}

const SingleFrind =async ({params}) => {
    const {cardId }=await params ;
    console.log(cardId)
    const friends=await frindsData()
    const friend = friends.find((f) => f.id === parseInt(cardId))

    return (
        <div className="w-10/12 mx-auto my-7">
         <div className="grid lg:grid-cols-3 gap-4">
        <div className="space-y-2 mx-auto ">
            <div>
                <div className="p-8 shadow-sm flex flex-col justify-around items-center text-center rounded-xl">
                            <Image className="rounded-full" src={friend.picture} alt="frinds" width={70} height={70}></Image>
                            <h2 className="font-bold text-xl">{friend.name}</h2>
                            <h3 className="font-semibold text-gray-500">{friend.days_since_contact}d ago </h3>
                            <div className="md:flex gap-2 my-3">
                            {
                                friend.tags.map((tag,index)=> <div key={index} className="badge badge-soft badge-success rounded-full">{tag}</div> )
                            }
                            </div>
                            <div>
                                {
                                    friend.status === "almost due" ? (<div className="badge badge-warning text-white rounded-full">Almost Due</div>) : friend.status === "on-track" ? (<div className="badge badge-success text-white rounded-full">On-Track</div>) : (<div className="badge badge-error text-white rounded-full">Overdue</div>)
                                }
                            </div>
                            <p className="text-sm text-gray-500 my-2">{friend.bio}</p>
                            <p className="text-sm text-gray-500 ">Preferred : {friend.email}</p>
                        </div>
            </div>
            <div className="p-2 shadow-sm rounded-xl flex justify-center items-center gap-1">
                <RiNotificationSnoozeLine /><p className="font-semibold">Snooze 2 weeks</p>
            </div>
            <div className="p-2 shadow-sm rounded-xl flex justify-center items-center gap-1">
                <RiArchiveLine /><p className="font-semibold">Archive</p>
            </div>
            <div className="p-2 shadow-sm rounded-xl flex justify-center items-center gap-1 text-error">
                <RiDeleteBinLine /><p className="font-semibold">Delete</p>
            </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2  md:grid-cols-3 gap-3 text-center ">
          <div className="shadow-sm py-15">
            <h2 className="text-4xl font-bold">{friend.days_since_contact}</h2>
            <p className="text-gray-500">Days Since Contact</p>
          </div>
          <div className="shadow-sm py-15">
            <h2 className="text-4xl font-bold">{friend.goal}</h2>
            <p className="text-gray-500">Goal (Days)</p>
          </div>
          <div className="shadow-sm py-15">
            <h2 className="text-4xl font-bold">{friend.next_due_date}</h2>
            <p className="text-gray-500">Next Due</p>
          </div>
        </div>
        <div className="p-4 shadow-sm my-3">
            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-[#244D3F]">Relationship Goal</p>
                <button className="btn">Edit</button>
            </div>
            <p className="text-gray-500">Connect every <span className="text-lg font-semibold text-black">30 days</span></p>
        </div>
        <div className="p-3 shadow-sm">
            <p className="text-lg font-semibold text-[#244D3F] mb-2">Quick Check-In</p>
         <InterectivitiToggolBtn friend={friend}></InterectivitiToggolBtn>
        </div>
        </div>
         </div>
        </div>
    );
};

export default SingleFrind;
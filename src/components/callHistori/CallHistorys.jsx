"use client";
import { useContext } from "react";
import { InterectiveContext } from "@/context/Interectiv.context";
import Image from "next/image";
import callLogo from '@/assets/call.png'
import textLogo from '@/assets/text.png'
import videoLogo from '@/assets/video.png'

const CallHistorys = () => {
    const date = new Date();

const formatted = date.toLocaleString('en-US', {
  day: 'numeric',
  month: 'long',    
  year: 'numeric',   
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});


    const context = useContext(InterectiveContext);
    if(!context) return null;
    const {call,text,videoCall}=context;
    const allIntraction=[
      ...call.map(intraction =>({...intraction,type: "Call"})),
      ...text.map(intraction => ({...intraction, type : "Text"})),
      ...videoCall.map(intraction => ({...intraction, type : "Video Call"}))
    ].reverse();

const getLogo = (type) => {
    if (type === "Call") return callLogo;
    if (type === "Text") return textLogo;
    if (type === "Video Call") return videoLogo;
};

    return (
        <div className="space-y-3 mt-6">

            <h2 className="text-xl font-bold mb-4">
                Activity Timeline
            </h2>

            {allIntraction.length === 0 ? (
                <p className="text-gray-500 text-5xl font-bold p-10 text-center">No history found</p>
            ) : (
                allIntraction.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 p-3 shadow-sm rounded-md"
                    >
                        <Image
                            src={getLogo(item.type)}
                            alt="friend"
                            width={40}
                            height={40}
                            
                        />

                        <div>
                            <p className="font-semibold"><span className="text-xl font-bold">{item.type}</span> sent {item.name}</p>
                            <p className="text-xs text-gray-500 capitalize">
                                {formatted}
                            </p>
                        </div>
                    </div>
                ))
            )}

        </div>
    );
};

export default CallHistorys;
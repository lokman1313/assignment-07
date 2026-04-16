"use client";
import { useContext } from "react";
import { InterectiveContext } from "@/context/Interectiv.context";
import Image from "next/image";
import callLogo from '@/assets/call.png'
import textLogo from '@/assets/text.png'
import videoLogo from '@/assets/video.png'

const CallHistorys = ({ type }) => {
    const context = useContext(InterectiveContext);
    
    if(!context) return null;
    
    const { call, text, videoCall } = context;


    const allIntraction = [];

    call.forEach(i => allIntraction.push({ ...i, type: "Call" }));
    text.forEach(i => allIntraction.push({ ...i, type: "Text" }));
    videoCall.forEach(i => allIntraction.push({ ...i, type: "Video Call" }));

    
    allIntraction.sort((a, b) => new Date(b.date) - new Date(a.date));

  
    const filteredData = type 
        ? allIntraction.filter(item => item.type === type) 
        : allIntraction;

    const getLogo = (type) => {
        if (type === "Call") return callLogo;
        if (type === "Text") return textLogo;
        if (type === "Video Call") return videoLogo;
    };

    return (
        <div className="space-y-3 mt-6">
            <h2 className="text-xl font-bold mb-4">Activity Timeline</h2>

            {filteredData.length === 0 ? (
                <p className="text-gray-500 text-5xl font-bold p-10 text-center">No history found</p>
            ) : (
                filteredData.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 shadow-sm rounded-md border border-gray-100">
                        <Image
                            src={getLogo(item.type)}
                            alt={item.type}
                            width={40}
                            height={40}
                        />

                        <div>
                            <p className="font-semibold">
                                <span className="text-xl font-bold">{item.type}</span> sent to {item.name}
                            </p>
                            <p className="text-xs text-gray-500 capitalize">
                                
                                {new Date(item.date).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CallHistorys;
"use client";
import { useState } from "react";
import Shorting from "@/components/dropDownShortion/Shorting";
import CallHistorys from "@/components/callHistori/CallHistorys";

const TimelineWrapper = () => {
    const [filter, setFilter] = useState("All");

    return (
        <>
            <div className="my-5">
                <Shorting setFilter={setFilter} />
            </div>
            <div className="my-5 p-4">
               
                <CallHistorys type={filter === "All" ? "" : filter} />
            </div>
        </>
    );
};

export default TimelineWrapper;
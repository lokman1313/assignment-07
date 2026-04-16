import CallHistorys from "@/components/callHistori/CallHistorys";
import TimelineWrapper from "@/components/TimelineWrapper";



export const metadata = {
  title: "Timeline",
  description: "Timeline dashboard for friend interactions",
}

const TimeLine = () => {
    
    return (
        <div className="w-9/12 mx-auto my-5">
            <h1 className="text-4xl font-bold">Timeline</h1>
            <div className="my-5"><TimelineWrapper></TimelineWrapper></div>
            {/* <div className="my-5  p-4">
                <CallHistorys></CallHistorys>
            </div> */}
        </div>
    );
};

export default TimeLine;
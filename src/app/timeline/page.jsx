import CallHistorys from "@/components/callHistori/CallHistorys";



export const metadata = {
  title: "Timeline",
  description: "Timeline dashboard for friend interactions",
}

const TimeLine = () => {
    return (
        <div className="w-9/12 mx-auto">
            <h1 className="text-4xl font-bold">Timeline</h1>
            <div className="my-5">
                <CallHistorys></CallHistorys>
            </div>
        </div>
    );
};

export default TimeLine;
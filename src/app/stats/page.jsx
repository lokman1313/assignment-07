import ReChart from "@/components/Chart/ReChart";

export const metadata = {
  title: "Friendship Analytics",
  description: "Analytics dashboard for friend interactions",
}
const page = () => {
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-4xl font-bold my-6">Friendship Analytics</h1>
            <div className="shadow-md  p-7 my-7">
             <h2 className="font-semibold">By Interaction Type</h2>
            <ReChart></ReChart>
            </div>
        </div>
    );
};

export default page;
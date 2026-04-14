import Image from "next/image";


const Card = ({frind}) => {
    return (
        <div className="p-10 shadow-sm flex flex-col justify-around items-center text-center">
            <Image className="rounded-full" src={frind.picture} alt="frinds" width={70} height={70}></Image>
            <h2 className="font-bold text-xl">{frind.name}</h2>
            <h3 className="font-semibold text-gray-500">{frind.days_since_contact}d ago </h3>
            <div className="md:flex gap-2 my-3">
            {
                frind.tags.map((tag,index)=> <div key={index} className="badge badge-soft badge-success rounded-full">{tag}</div> )
            }
            </div>
            <div>
                {
                    frind.status === "almost due" ? (<div className="badge badge-warning text-white rounded-full">Warning</div>) : frind.status === "on-track" ? (<div className="badge badge-success text-white rounded-full">Success</div>) : (<div className="badge badge-error text-white rounded-full">Error</div>)
                }
            </div>
        </div>
    );
};
{/*  */}
export default Card;
import Link from "next/link";
import Image from "next/image";

interface dashboardData {
    data:{
        id : string,
        name : string,
        description : string,
        image : string,
    }
}




export default function DashboardSelect({data}:dashboardData) {
    return (
        <>    
        <div className=" w-3/4 m-auto">
            <div className="bg-white h-[450px] text-black rounded-xl">
                <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img src={data.image} alt={data.name} className="w-44 h-44 rounded-full" />
                </div>

                <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <Link href={"/dashboard/"+data.id} >
                        <div className="text-white">
                            <button className="text-3xl font-bold bg-indigo-600 px-5 pb-1 hover:cursor-pointer hover:bg-indigo-700 rounded-xl">{data.name}</button>
                        </div>
                    </Link>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
        </>
    );
}
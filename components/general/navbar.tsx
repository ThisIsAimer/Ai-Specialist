import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink,LogoutLink,RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"

export default async function Navbar() {

    const {getUser} = getKindeServerSession();
    const user = await getUser();


    return (
        <nav className="py-2 flex items-center justify-between">
            <div className="flex items-center gap-10">
                <Link href="/" className="text-2xl font-bold">
                    <span>
                       <button className="border-5 border-indigo-600 px-1.25 pb-0.5 rounded-full hover:cursor-pointer">
                            AI
                        </button>
                    </span>
                    <span className="text-indigo-600">Specialist</span>
                </Link>
            </div>
            <div className="flex flex-row justify-between gap-6">

            <div className="hidden sm:flex items-center gap-6">
                    <Link href="/" className="text-1xl text-gray-600 font-medium hover:text-indigo-600 transition-colors">
                        Home
                    </Link>

                    <Link href="/dashboard" className="text-1xl text-gray-600 font-medium hover:text-indigo-600 transition-colors">
                        Dashboard
                    </Link>

            </div>
                {user ? 
                (<div className="flex items-center gap-6">
                    <Avatar>
                        <AvatarImage src={user.picture?.toString()} alt={user.given_name?.toString()} />
                        <AvatarFallback>{user.given_name}</AvatarFallback>
                    </Avatar>
                    <LogoutLink className={buttonVariants({variant:"secondary"})}>logout</LogoutLink>
                </div>):
                (<div className="text-2xl flex items-center gap-4">
                    <LoginLink className={buttonVariants()}>Login</LoginLink>
                    <RegisterLink className={buttonVariants({variant:"secondary"})}>Sign up</RegisterLink>
                </div>)}
            </div>
        </nav>
    );
}
//<button className="px-4 py-1 bg-gray-400 rounded-2xl hover:bg-gray-500 cursor-pointer">Sign up</button>
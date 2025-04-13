import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div >
      <div className= "text-7xl leading-28 text-center font-bold h-full flex justify-center mt-20">
        <div>
          AI<span className="px-1"></span>
          <span className="text-indigo-600 pb-2 bg-indigo-300 rounded-3xl px-3 mb-4">Specialist</span>
          <span className="px-1"></span>at your finger tips
        </div>
      </div>
      <div className="text-5xl leading-15 mt-22 font-semibold text-center ml-5 mr-3">
        Use a wide range of AI agents with<span className="px-1"></span>
          <span className="text-indigo-600 pb-2 bg-indigo-300 rounded-3xl px-1 mb-4">specialized</span>
          <span className="px-1"></span>training for your needs!
      </div>
      <div className="text-2xl font-semibold mt-20 flex flex-row-reverse mr-37">
          <Link className="text-indigo-600 hover:text-indigo-800"  href="/dashboard">
              <button className="border-6 border-indigo-600 hover:border-indigo-800 hover:cursor-pointer border-solid rounded-full px-4 pb-1">
                <div className="flex flex-row gap-2">
                  <div>
                    Try our agents 
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>  
              </button>
          </Link>
      </div>
      <div className="mt-20">
        <div className="pb-1 py-2">
        <div className="text-4xl font-bold ml-10 mt-3 mb-5">Our approach is unique!</div>
          <div className="bg-indigo-400 mx-10 pb-2 py-2 px-4 font-semibold rounded-2xl">
            We’ve trained AI modals that excel in different specialized fields. Each AI agent is trained with specialized data to give the best solutions to your problems all in the comfort of your home.
          </div>
        </div>
      </div>
      <div className="mt-15 ml-10">
        <div className="text-4xl font-bold mt-3">Get started in 3 simple steps!</div>
        <div className="flex flex-row justify-between gap-2 mt-5">
          { info.map( items => <div className="flex flex-col text-center border-2 border-indigo-600 rounded-2xl w-1/3 px-4" key={items.title}>
            <div>
                <div className="text-2xl font-bold">
                  {items.title}
                </div>
                <div className="text-sm mt-4 font-semibold">
                  {items.discription}
                </div>
              </div>
            </div>
            )}
        </div>
      </div>
      <div className="bg-black rounded-t-2xl mt-10 text-white max-w-screen">
        <div>
          <div className="pt-10 mx-10 text-sm font-semibold  text-center">
            are you ready?!
          </div>
          <div className="text-3xl font-bold  text-center">Let's Start!</div>
        </div>
        <div className="flex flex-row items-center gap-3 pb-10 py-10">
            <div className="text-2xl font-bold flex flex-col items-center w-1/3">
              Team RisingDevelopers
            </div>
            <div className="flex flex-col items-center w-1/3">
              <Link href="/dashboard">
                <button className="border-2 font-bold border-white rounded-4xl p-4 hover:cursor-pointer hover:text-gray-300  hover:border-gray-300">
                  Our agents
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <Link href="/contact" className=" text-2xl font-bold ml-4">
                Contact us
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}


const info =[{
    title : "Login",
    discription: "Sign-up or login for user authentication and security! loging in to our website is easy and can be done with both google and github.",
  },
  {
    title : "Select agent",
    discription: "Select one of our wide range of AI agents with specialized prompting and training for your use! you can use a vide range of agents such as doctor Ai or Accountent Ai which can help you get done a vide range of tasks.",
  },
  {
    title : "Get solution",
    discription: "Now you can give more information about yourself and your problem. you can provide images and more information to let the agents solve your problem in seconds!",
  }
]

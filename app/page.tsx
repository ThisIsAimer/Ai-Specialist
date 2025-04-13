import Link from "next/link";

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
        <div className="flex flex-row justify-evenly items-center gap-4">
          <div className="flex flex-col items-center border-r-2 border-r-black">
            <div>
              Login
            </div>
            <div>
              Sign-up or login for user authentication and security!
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div>
              Select agent
            </div>
            <div>
              Select one of our wide range of AI agents with specialized trompting and training for your use!
            </div>
          </div>
          <div className="flex flex-col items-center border-l-2 border-l-black">
            <div>
              Get solution
            </div>
            <div>
              Sign-up or login for user authentication and security
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div >
      <div className= "text-7xl leading-28 text-center font-bold h-full flex justify-center mt-12">
        <div>
          AI<span className="px-1"></span>
          <span className="text-indigo-600 pb-2 bg-indigo-300 rounded-3xl px-3 mb-4">Specialist</span>
          <span className="px-1"></span>at your finger tips
        </div>
      </div>
      <div className="text-5xl leading-15 mt-17 font-semibold text-center ml-5 mr-3">
        Use a vide range of AI agents with<span className="px-1"></span>
          <span className="text-indigo-600 pb-2 bg-indigo-300 rounded-3xl px-1 mb-4">specialized</span>
          <span className="px-1"></span>training for your needs!
      </div>
      <div className="text-2xl font-semibold mt-17 flex flex-row-reverse mr-37">
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
    </div>
  );
}

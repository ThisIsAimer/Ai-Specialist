import DashboardSelect from "@/components/general/dashboardSelect";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboardroute() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    return (
        <>
            <div className="text-4xl">
                this is dashboard
            </div>
            <div>
                <DashboardSelect data={data}>

                </DashboardSelect>
            </div>
        </>
    );
}

// some dummy deta
const data = {
    id: "webdev",
    name: "web dev",
    description: "Web development is the process of creating websites and web applications that run on the internet. It involves both front-end development, which focuses on the design and user experience using technologies like HTML, CSS, and JavaScript, and back-end development, which handles the server-side logic and databases using languages such as Python, PHP, Ruby, or Node.js. Web developers work to ensure websites are functional, responsive, and user-friendly across different devices and browsers. With the growing demand for online services, web development has become a crucial skill in the tech industry, combining creativity and technical expertise to build everything from simple landing pages to complex web-based platforms",
    image: "/images/image.png",
}
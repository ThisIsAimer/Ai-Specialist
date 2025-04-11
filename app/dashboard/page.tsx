import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboardroute() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    return (
        <>
        <div className="text-4xl">
            this is dashboard
        </div>
        </>
    );
}
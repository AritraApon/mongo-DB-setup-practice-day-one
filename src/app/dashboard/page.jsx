import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DashBoardPage = async() => {
const session = await  auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user =session?.user ;
if(!session){
    redirect('/auths/logIn')

}


    return (
        <div>
           <h1 className="text-center font-bold text-3xl">hello dashboard</h1>
        </div>
    );
};

export default DashBoardPage;
import { Outlet } from "react-router-dom";
import ProfileSection from "../components/ProfileSection";
const GestionTickets=()=>{
    return (
        <div className="flex flex-col w-full">
            <div className="flex sm:flex-row flex-col grow">
                <Outlet />
                <div className="w-1/6 bd-zinc-400">
                    <ProfileSection/>
                </div>
            </div>
        </div>
    );
}

export default GestionTickets
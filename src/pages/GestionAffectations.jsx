import { Outlet } from "react-router-dom";
import ProfileSection from "../components/ProfileSection.jsx";
const GestionAffectations = () => {
    return ( 
        <div className="flex flex-col w-full">
            <div className="flex sm:flex-row flex-col grow bg-gray-100 ">
                <Outlet />
                <div className="w-1/6 bg-gray-200 flex flex-none">
                    <ProfileSection/>
                </div>
            </div>
        </div>
     );
}
 
export default GestionAffectations;
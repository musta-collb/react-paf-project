import { Outlet } from "react-router-dom";
import AppelsOffres from "../components/acquisition/AppelsOffres";
import Header from "../components/acquisition/Header";
import SideBar from "../components/acquisition/SideBar";
const GestionAcquisition = () => {
    return ( 
        <div className="flex flex-col w-screen h-screen ">
            {/* header */}
            <Header/>
            <div className="flex sm:flex-row flex-col grow overflow-y-auto">
                {/* sidebar */}
                <SideBar/>
                {/* content */}
                <Outlet/>
                <div className="w-1/6 bd-zinc-400">

                </div>
            </div>
        </div>
     );
}
 
export default GestionAcquisition;
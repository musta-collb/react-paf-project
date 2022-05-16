import { Outlet } from "react-router-dom";
const GestionAffectations = () => {
    return ( 
        <div className="flex flex-col w-full">
            <div className="flex sm:flex-row flex-col grow">
                <Outlet />
                <div className="w-1/6 bd-zinc-400">
                </div>
            </div>
        </div>
     );
}
 
export default GestionAffectations;
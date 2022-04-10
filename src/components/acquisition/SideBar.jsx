import { Link } from "react-router-dom";
const SideBar = () => {
    return ( 
        <div className="flex flex-col flex-none w-1/6 bg-blue-600 drop-shadow-lg items-start justify-start">
            <div className=" text-white flex w-full items-center h-16 hover:bg-blue-700 pl-2">
                <Link to="#">Appels d'offres</Link>
            </div>
            <div className=" text-white flex  h-16 w-full items-center hover:bg-blue-700 pl-2">
                <Link to="#">Offres</Link>
            </div>
            <div className=" text-white flex  h-16 w-full items-center hover:bg-blue-700 pl-2">
                <Link to="#">Marchés</Link>
            </div>
            <div className=" text-white flex h-16 w-full items-center hover:bg-blue-700 pl-2">
                <Link to="#">Fournisseurs</Link>
            </div>
        </div>
     );
}
 
export default SideBar;
import { Link } from "react-router-dom";
const SideBar = () => {
    return ( 
        <div className="flex flex-col flex-none md:w-1/6 w-full bg-blue-600 shadow-2xl items-start justify-start">
            <div className=" text-white flex w-full items-center h-16 hover:bg-blue-700 pl-2 space-x-2">
                <div className="w-8 h-8 flex justify-center rounded-full text-2xl font-medium bg-blue-500">A</div>
                <Link to="appelsoffres">Appels d'offres</Link>
            </div>
            <div className=" text-white flex  h-16 w-full items-center hover:bg-blue-700 pl-2 space-x-2">
            <div className="w-8 h-8 flex justify-center rounded-full text-2xl font-medium bg-blue-500">O</div>
                <Link to="#">Offres</Link>
            </div>
            <div className=" text-white flex  h-16 w-full items-center hover:bg-blue-700 pl-2 space-x-2">
            <div className="w-8 h-8 flex justify-center rounded-full text-2xl font-medium bg-blue-500">M</div>
                <Link to="#">Marchés</Link>
            </div>
            <div className=" text-white flex h-16 w-full items-center hover:bg-blue-700 pl-2 space-x-2">
            <div className="w-8 h-8 flex justify-center rounded-full text-2xl font-medium bg-blue-500">F</div>
                <Link to="#">Fournisseurs</Link>
            </div>
        </div>
     );
}
 
export default SideBar;
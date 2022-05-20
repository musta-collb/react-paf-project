import { useQuery } from "react-query";
import Dashboard from "../../pages/admin/dashboardAdmin";
import Erreur from "../acquisition/Erreur";
import Loading from "../acquisition/Loading";
import { fetchAllRebut } from "./apiCall";
import Rebut from "./Rebut"
const ListRebuts = () => {
    const {data, isLoading, isError}=useQuery('rebuts', fetchAllRebut)
    if(isLoading){
        return (<div className=" flex items-center m-auto w-full h-screen"><Loading/></div>);
    }
    if(isError){
        return (<div className="flex items-center m-auto w-full h-screen"><Erreur/></div>)
    }
    return ( 
        <div className=" flex flex-col w-full h-screen m-[2em]">
            <div className="flex flex-none m-[1em]">
                <p className="text-xl font-bold text-gray-600 bg-zinc-300 px-4 rounded-full">Les Rebuts</p>
            </div>
            <div className="flex flex-col overflow-y-auto scrollbar m-[1em] space-y-2">
            {
                data.map(rebut=><Rebut rebut={rebut}/>)
            }
            </div>
        </div>
     );
}
 
export default ListRebuts;
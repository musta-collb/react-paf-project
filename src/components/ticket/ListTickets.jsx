import { fetchAllTicket } from "./apiCall.js";
import Ticket from "./Ticket.jsx"
import { useQuery } from "react-query";
import Erreur from "../acquisition/Erreur.jsx";
import Loading from "../acquisition/Loading.jsx";
const ListTickets=()=>{
  const{isLoading, isError, data, error,status}=useQuery('tickets',fetchAllTicket);

  if(isLoading) 
  return (
      <div className="w-full h-screen flex items-center m-auto">    
            <Loading/>
      </div>
    );

  if(isError){
    console.log(error)
    return (
        <div className="w-full h-screen  flex items-center m-auto">
            <Erreur/>
        </div>
    );
  } 
    return (
        
            <div className="flex flex-col w-full space-y-1 m-4 bg-gray-100">
                <div className="p-4">
                    <p className="text-xl font-bold text-gray-600">Gestion des tickets</p>
                </div>
                <div className="flex flex-col space-y-2 ">
                    {
                        data.map(ticket=><Ticket key={ticket} ticket={ticket}/>)
                    }
                </div>
            </div>
    );
}
export default ListTickets;
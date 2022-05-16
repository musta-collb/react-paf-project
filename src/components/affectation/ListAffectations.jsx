import LinkButton from "../acquisition/LinkButton.jsx"
import {fetchAllAffectation} from "./apiCall.js"
import { useQuery } from "react-query";
import Erreur from "../acquisition/Erreur.jsx";
import Loading from "../acquisition/Loading.jsx";
import Affectation from "./Affectation.jsx";
const ListAffectations = () => {
    const{isLoading, isError, data, error}=useQuery('affectations',fetchAllAffectation);

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
        <div className="flex flex-col w-full">
            <div className="p-4">
                <p className="text-xl font-bold">Gestion des affectations</p>
            </div>
            <div className="flex justify-end p-2 flex-none">
                <LinkButton settings={{to:"creation", color:"bg-blue-600", text:"Créer une affectation"}}/>
            </div>
            <div className="flex flex-col space-y-2">
                    {
                        data.map(affectation=><Affectation affectation={affectation}/>)
                    }
            </div>
        </div>
    );
}
 
export default ListAffectations;
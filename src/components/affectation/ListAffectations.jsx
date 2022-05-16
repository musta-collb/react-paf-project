import LinkButton from "../acquisition/LinkButton.jsx"
import {fetchAllAffectation} from "./apiCall.js"
import { useQuery } from "react-query";
import Erreur from "../acquisition/Erreur.jsx";
import Loading from "../acquisition/Loading.jsx";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ListAffectations = () => {
  const { id } = useParams();
  const PARENTURL = `/personnel/${id}/affectation`;
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
        <div className="flex flex-col w-full  pb-[2em]">
            <div className="p-4">
                <p className="text-xl font-bold text-gray-600">Gestion des affectations</p>
            </div>
            <div className="flex justify-end p-2 flex-none">
                <LinkButton settings={{to:"creation", color:"bg-blue-600", text:"Créer une affectation"}}/>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Type Exploiteur
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Responsable
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nombre d'article 
                            </th>
                            <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Détails</span>
                            </th>
                        </tr>
                    </thead>
                <tbody>
                {
                    data.map( affectation=>(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                { affectation.exploiteur.type ==="Bureau" && <span className="bg-yellow-200 p-1 rounded">{affectation.exploiteur.type}</span> }
                                { affectation.exploiteur.type ==="Personnel" && <span className="bg-green-200 p-1 rounded">{affectation.exploiteur.type}</span> }
                                { affectation.exploiteur.type ==="Departement" && <span className="bg-orange-200 p-1 rounded">{affectation.exploiteur.type}</span> }   
                            </th>
                            <td class="px-6 py-4">
                                {affectation.exploiteur.description}
                            </td>
                            <td class="px-6 py-4">
                                {affectation.exploiteur.responsable}
                            </td>
                            <td class="px-6 py-4">
                                {affectation.articles.length}
                            </td>
                            <td class="px-6 py-4 text-right">
                            {console.log(affectation.id)}
                            <Link to={PARENTURL+`/${affectation.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Détails</Link>
                            </td>
                        </tr>
                ))
                }
                </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default ListAffectations;
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchAffectation } from "./apiCall";
import Loading from "../acquisition/Loading";
import Erreur from "../acquisition/Erreur";

const DetailsAffectation = () => {
    const { idAffectation }=useParams();
    const { data, isLoading, isError}=useQuery('detail_affectation'+idAffectation,()=>fetchAffectation(idAffectation));

    if(isLoading) 
    return (
        <div className="w-full h-screen flex items-center m-auto">    
                <Loading/>
        </div>
        );

    if(isError)
        return (
            <div className="w-full h-screen  flex items-center m-auto">
                <Erreur/>
            </div>
        );
    
    return ( 
    <div className="w-full h-screen mx-[3em] mt-[2em]  ">
        <div className="flex flex-col">
            <p className="font-bold text-xl text-gray-600 underline">Détails affectation</p>
            {/*Exploiteur*/}
            <div className="flex flex-col p-4 space-y-2">
                <div className="grid grid-cols-2 bg-blue-400 p-2 shadow rounded">
                    <div className="flex">
                        <p className="font-semibold">
                            Date:
                        </p>
                        <span className=" px-2">
                            {data.date}
                        </span>
                    </div>
                    <div className="flex">
                        <p className="font-semibold">
                            Durée:
                        </p>
                        <span className="px-2">
                        {data.duree}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col p-2 bg-white rounded shadow">
                    <p className="font-semibold">
                        Détails 1:
                    </p>
                    <span className="px-2">
                    {data.details}
                    </span>
                </div>
                
                <div className="flex flex-col p-2 bg-white rounded shadow ">
                    <p className="font-bold text-lg text-gray-600 ">
                        Exploiteur:
                    </p>
                    <div className="mx-6 grid grid-cols-2 w-fit">
                            <p className="text-gray-600 font-bold">Type:</p>
                            <span className="mx-2 text-gray-600">{data.exploiteur.type}</span>
                            <p className="text-gray-600 font-bold">Responsable:</p>
                            <span className="mx-2 text-gray-600">{data.exploiteur.responsable}</span>
                            <p className="text-gray-600 font-bold">Description:</p>
                            <span className="mx-2 text-gray-600">{data.exploiteur.description}</span>
                    </div>
                </div>
            
            {/*Articles*/}
                <div className="flex flex-col  p-2  ">
                    <p className="font-bold text-lg text-gray-600 mb-4">Les articles</p>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg  ">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Désignation
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Etat
                                </th>
                                <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Détails</span>
                                </th>
                            </tr>
                        </thead>
                    <tbody>
                    {
                        data.articles.map( article=>(
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {article.designation}
                                </th>
                                <td class="px-6 py-4">
                                    {article.etat}
                                </td>
                                <td class="px-6 py-4 text-right">
                                {/* <Link to={PARENTURL+`/${affectation.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Détails</Link> */}
                                </td>
                            </tr>
                    ))
                    }
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default DetailsAffectation;
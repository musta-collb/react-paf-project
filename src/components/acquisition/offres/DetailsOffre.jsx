import Erreur from "../Erreur";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchOffre } from "./apiCalls";
import LinkButton from "../LinkButton";

const DetailsOffre = () => {
    //route related stuff
  const { idOffre } = useParams();
  const { id } = useParams();
  const PARENTURL = `/personnel/${id}/acquisition/offres`;
  //data fetching stuff
  const{ data, isLoading, isError, error}=useQuery('detail_offre', ()=>fetchOffre(idOffre));

  if(isLoading) return(<Loading/>);
  if(isError) return(<Erreur/>);
    return (
        <div className="flex flex-col p-[1em] space-y-1 w-full">
            <h1 className="font-bold text-2xl ">Détails de l'offres</h1>
            {/* en-tête */}
            <div className="flex flex-col px-[1em]">
                <div className="flex space-x-2">
                    <p className="text-xs font-medium">Date: </p>
                    <div className="text-xs">{data.date}</div>
                </div>
                <div className="flex space-x-2">
                    <p className="text-xs font-medium">Reference appel d'offre:</p>
                    <div className="text-xs">{data.reference_ao}</div>
                </div>
            </div>
            {/*Fournisseur */}
            <div className="flex flex-col rounded shadow-lg bg-white pb-2">
                <div className="flex font-bold rounded-t text-xl bg-zinc-200 px-[1em]">Fournisseur</div>
                <div className="flex flex-col px-[1em]">
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Raison social:</p>
                        <div className="font-normal text-md">{data.fournisseur.raison_sociale}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Adresse:</p>
                        <div className="font-normal text-md">{data.fournisseur.adresse}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">E-mail:</p>
                        <div className="font-normal text-md">{data.fournisseur.email}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Téléphone:</p>
                        <div className="font-normal text-md">{data.fournisseur.telephone}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Pays:</p>
                        <div className="font-normal text-md">{data.fournisseur.pays}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Secteur:</p>
                        <div className="font-normal text-md">{data.fournisseur.secteur}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Nombre année d'expertise:</p>
                        <div className="font-normal text-md">{data.fournisseur.nb_annee_exp}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Code postale:</p>
                        <div className="font-normal text-md">{data.fournisseur.code_postale}</div>
                    </div>
                </div>
            </div>
            {/* Détails */}
            <div className="font-bold text-xl flex px-[1em]">
                Détails de l'offre
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Désignation
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Marque
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantité
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Unité
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Prix unitaire
                            </th>
                            <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                <tbody>
                {
                    data.biens.map( b=>(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {b.designation}
                            </th>
                            <td class="px-6 py-4">
                                {b.marque}
                            </td>
                            <td class="px-6 py-4">
                                {b.quantite}
                            </td>
                            <td class="px-6 py-4">
                                {b.unite}
                            </td>
                            <td class="px-6 py-4">
                                {b.prix_unitaire}
                            </td>
                            <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                ))
                }
                </tbody>
                </table>
            </div>

            {/* Fin detail */}
            
            <div className="flex justify-end">
                <LinkButton settings={{to:PARENTURL, color:"bg-zinc-800", text:"retour"}}/>
            </div>
        </div>
    );
}
 
export default DetailsOffre;
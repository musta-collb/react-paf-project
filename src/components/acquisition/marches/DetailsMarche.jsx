import Erreur from "../Erreur";
import Loading from "../Loading";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation , QueryClient} from "react-query";
import { fetchMarche, updateMarche } from "./apiCalls";
import LinkButton from "../LinkButton";
import { useForm, useFieldArray } from "react-hook-form";
import { useState, useEffect } from "react";
import SimpleButton from "../SimpleButton";
import SubmitButton from "../SubmitButton";


const DetailsMarches = () => {
    //route related stuffs
    const {idMarche, id}=useParams()
    const PARENTURL = `/personnel/${id}/acquisition/marches`;
    //editionstuff
    const [isEditing, setIsEditing]=useState(false);
    //data fetching stuff
    const{ data, isLoading, isError, error, refetch}=useQuery('detail_marche'+idMarche, ()=>fetchMarche(idMarche),{refetchOnMount:true});
    //mutation
    const mutation=useMutation(updateMarche,{
        onSuccess: data => {
            const queryClient=new QueryClient({});
            queryClient.setQueryData(['marches', { id: idMarche }], data)
            refetch();
        }
    })
    //Form shits
    const{register, handleSubmit, reset, formState, control}=useForm({ mode:'onSubmit'});

    const{errors}=formState;

    const onSubmit=async (form_data)=>{
        await mutation.mutate(form_data);
        setIsEditing(false)
    }

  if(isLoading) return(<Loading/>);
  if(isError) return(<Erreur/>);
    return ( 
        <div className="flex flex-col p-[1em] space-y-2 w-full bg-gray-100">
            <div className="flex justify-between m-2">
                <h1 className="font-bold text-2xl text-gray-600 underline ">Détails du marché</h1>
            </div>
            <form  className="" onSubmit={handleSubmit(onSubmit)}>
            {/* {isEditing ?
            <div className="flex justify-end"> <SubmitButton settings={{color:"bg-blue-600", text:"Valider" }}/></div>
            :
            <SimpleButton settings={{text:"Modifier", color:"bg-yellow-300", action:()=>{setIsEditing(true); reset(data)}}}/>
            } */}
            <div className="flex flex-col mx-4">
                <div className="flex px-4 bg-gray-300 w-fit shadow ">
                    <div className="text-gray-600 font-bold p-1">Marche numéro:</div>
                    <div className="text-gray-600 p-1">{data.id}</div>
                </div>
                <div className="flex px-4">
                    <div className="text-gray-600 font-bold p-1">Relatif à l'appel d'offre:</div>
                    <div className="text-gray-600 p-1 "><span className="bg-blue-400 rounded-lg px-2">{data.offre.reference_ao}</span></div>
                </div>
                <div className="grid grid-cols-2 px-4">
                    <div className="flex">
                        <div className="text-gray-600 font-bold p-1">Date:</div>
                        <div className="text-gray-600 p-1">{data.date}</div>
                    </div>
                    <div className="flex">
                    <div className="text-gray-600 font-bold p-1">Date de Livraison:</div>
                        <div className="text-gray-600 p-1">{data.date_livraison}</div>
                    </div>
                </div>
                <div className="flex flex-col bg-white shadow-lg p-4 ">
                    <p className="text-lg text-gray-600 font-bold px-1 underline">Fournisseur</p>
                    <div className="grid grid-cols-6 w-fit">
                        <div className="text-gray-600 font-bold p-1">Raison sociale:</div>
                        <div className="text-gray-600 p-1">{data.fournisseur.raison_sociale}</div>
                        <div className="text-gray-600 font-bold p-1">Adresse:</div>
                        <div className="text-gray-600 p-1">{data.fournisseur.adresse}</div>
                        <div className="text-gray-600 font-bold p-1">E-mail:</div>
                        <div className="text-gray-600 p-1">{data.fournisseur.email}</div>
                        <div className="text-gray-600 font-bold p-1">Pays:</div>
                        <div className="text-gray-600 p-1">{data.fournisseur.pays}</div>
                        <div className="text-gray-600 font-bold p-1">Secteur:</div>
                        <div className="text-gray-600 p-1">{data.fournisseur.secteur}</div>
                        <div className="text-gray-600 font-bold p-1">Telephone:</div>
                        <div className="text-gray-600 p-1">{data.fournisseur.telephone}</div>
                        <div className="text-gray-600 font-bold p-1">Code postale</div>
                        <div className="text-gray-600 p-1">{data.fournisseur.code_postale}</div>
                    </div>
                </div>
                <div className="flex flex-col p-4 ">
                <p className="text-lg text-gray-600 font-bold px-1 underline">Détails du marché</p>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-4 ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Designation générique
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantité
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Prix unitaire
                            </th>
                            <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Plus ..;</span>
                            </th>
                        </tr>
                    </thead>
                <tbody>
                {
                    data.details.map( d=>(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {d.article_generique.designation}  
                            </th>
                            <td class="px-6 py-4">
                                {d.quantite}
                            </td>
                            <td class="px-6 py-4">
                                {d.prix_unitaire}
                            </td>
                            <td class="px-6 py-4 text-right">
                            <Link to={""} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Détails</Link>
                            </td>
                        </tr>
                ))
                }
                </tbody>
                </table>
            </div>
                </div>
            </div>
            </form>
            <div className="flex justify-end">
                <LinkButton settings={{to:PARENTURL, color:"bg-gray-600", text:"retour"}}/>
            </div>
        </div>
     );
}
 
export default DetailsMarches;
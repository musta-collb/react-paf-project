import Erreur from "../Erreur";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { useQuery, useMutation , QueryClient} from "react-query";
import { fetchOffre, updateOffre } from "./apiCalls";
import LinkButton from "../LinkButton";
import { useForm, useFieldArray } from "react-hook-form";
import { useState, useEffect } from "react";
import SimpleButton from "../SimpleButton";
import SubmitButton from "../SubmitButton";

const DetailsOffre = () => {
    
    //route related stuff
    const { idOffre } = useParams();
    const { id } = useParams();
    const PARENTURL = `/personnel/${id}/acquisition/offres`;
    //editionstuff
    const [isEditing, setIsEditing]=useState(false);
    //data fetching stuff
    const{ data, isLoading, isError, error, refetch}=useQuery('detail_offre'+idOffre, ()=>fetchOffre(idOffre),{refetchOnMount:true});
    //mutation
    const mutation=useMutation(updateOffre,{
        onSuccess: data => {
            const queryClient=new QueryClient({});
            queryClient.setQueryData(['offres', { id: idOffre }], data)
            refetch();
        }
    })
    //Form shits
    const{register, handleSubmit, reset, formState, control}=useForm({ mode:'onSubmit'});
    const{fields, append, remove}=useFieldArray({
        control,
        name:'biens'
    });

    const{errors}=formState;

    const onSubmit=async (form_data)=>{
        await mutation.mutate(form_data);
        setIsEditing(false)
    }

  if(isLoading) return(<Loading/>);
  if(isError) return(<Erreur/>);
    return (
        <div className="flex flex-col p-[1em] space-y-2 w-full bg-gray-100">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl text-gray-600 underline">Détails de l'offres</h1>
            </div>
            {/* en-tête */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {isEditing ?<div className="flex justify-end"> <SubmitButton settings={{color:"bg-blue-600", text:"Valider" }}/></div>:
                <SimpleButton settings={{text:"Modifier", color:"bg-yellow-300", action:()=>{setIsEditing(true); reset(data)}}}/>}
                <div className="grid grid-cols-2 w-fit mb-2">
                    <p className="text-sm font-medium  p-0.5 m-0.5">Reference appel d'offre:</p>
                    {isEditing?
                    <input 
                    type="text"  
                    class="text-sm p-0.5 border-gray-300 rounded text-gray-600 m-0.5" 
                    {...register("reference_ao",{required:"La référence de l'appel d'offre est obligatoire"})}
                    />
                    :
                    <div className="text-sm text-gray-600 px-2 p-0.5 m-0.5 bg-gray-300 rounded">{data.reference_ao}</div>
                    }
                    <p className="text-sm font-medium  p-0.5 m-0.5">Date: </p>
                    {isEditing?
                        <input 
                        type="date" 
                        class="text-sm p-0.5 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register("date",{required:"La date est obligatoire"})}
                        />
                        :
                        <div className="text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.date}</div>
                    }     
                </div>
            {/*Fournisseur */}
            <div className="flex flex-col rounded shadow-lg bg-white pb-2 mb-2">
                <div className="flex font-bold rounded-t text-xl bg-zinc-200 px-[1em] text-gray-600">Fournisseur</div>
                <div className="flex flex-col px-[1em]">
                    <div className="grid grid-cols-2 w-fit">
                        <p className="font-medium text-md ">Raison social:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm px-2 p-0.5 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.raison_sociale`,{required:"La raison_sociale est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5 ">{data.fournisseur.raison_sociale}</div>
                        }
                        <p className="font-medium text-md">Adresse:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm px-2 p-0.5 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.adresse`,{required:"L'adresse est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.fournisseur.adresse}</div>
                        }
                        <p className="font-medium text-md">E-mail:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm px-2 p-0.5 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.email`,{required:"L'email est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.fournisseur.email}</div>
                        }
                        <p className="font-medium text-md">Téléphone:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm px-2 p-0.5 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.telephone`,{required:"Le telephone est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.fournisseur.telephone}</div>
                        }

                        <p className="font-medium text-md">Pays:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 px-2 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.pays`,{required:"Le pays est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.fournisseur.pays}</div>
                        }
                        <p className="font-medium text-md">Secteur:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5  px-2 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.secteur`,{required:"Le secteur est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.fournisseur.secteur}</div>
                        }
                        <p className="font-medium text-md">Nombre année d'expertise:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 px-2 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.nb_annee_exp`,{required:"Le nombre d'année d'expérience est obligatoire"})}
                        />
                        :
                        <div className="font-normal  text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.fournisseur.nb_annee_exp}</div>
                        }
                        <p className="font-medium text-md">Code postale:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 px-2 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.code_postale`,{required:"Le code postal est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.fournisseur.code_postale}</div>
                        }
                    </div>
                </div>
            </div>
            {/* Détails */}
            <div className="font-bold text-xl flex px-[1em] text-gray-700 mt-4 mb-2">
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
                        </tr>
                    </thead>
                <tbody>
                {   isEditing?
                <>{
                    fields.map( (field, index)=>(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-2 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300 w-32 text-sm "
                            {...register(`biens.${index}.designation`,{required:"La désignation est obligatoire"})}
                            />
                            </th>
                            <td class="px-6 py-1">
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300  w-32 text-sm"
                            {...register(`biens.${index}.marque`,{required:"La quantité du bien est obligatoire"})}
                            />
                            </td>
                            <td class="px-2 py-1">
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300 w-32 text-sm"
                            {...register(`biens.${index}.quantite`,{required:"L'unité est obligatoire"})}
                            />
                            </td>
                            <td class="px-2 py-1">
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300 w-32 text-sm"
                            {...register(`biens.${index}.unite`,{required:"L'unité est obligatoire"})}
                            />
                            </td>
                            <td class="px-2 py-1">
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300 w-32 text-sm"
                            {...register(`biens.${index}.prix_unitaire`,{required:"L'unité est obligatoire"})}
                            />
                            </td>
                        </tr>
                ))}
                {isEditing &&<div className="p-1 flex justify-end"><SimpleButton settings={{text:"Ajouter", color:"bg-green-400", action:()=>append({})}}/></div>}
                </>
                :
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
                        </tr>
                ))
                }
                </tbody>
                </table>
            </div>

            {/* Fin detail */}
            </form >
            <div className="flex justify-end">
                <LinkButton settings={{to:PARENTURL, color:"bg-gray-600", text:"retour"}}/>
            </div>
        </div>
    );
}
 
export default DetailsOffre;
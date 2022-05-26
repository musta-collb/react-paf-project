import Erreur from "../Erreur";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
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
  const{ data, isLoading, isError, error}=useQuery('detail_offre'+idOffre, ()=>fetchOffre(idOffre));
  //mutation
  const mutation=useMutation(updateOffre)
    //Form shits
    const{register, handleSubmit, reset, formState, control}=useForm({ mode:'onSubmit'});
    const{fields, append, remove}=useFieldArray({
        control,
        name:'biens'
    });

    const{errors}=formState;

    const onSubmit=async (form_data)=>{
        //await mutation.mutate(form_data);
        setIsEditing(false)
    }

    useEffect(()=>{
        if(data){
            reset(data);
        }
    },[data]);


  if(isLoading) return(<Loading/>);
  if(isError) return(<Erreur/>);
    return (
        <div className="flex flex-col p-[1em] space-y-2 w-full bg-gray-100">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl text-gray-600 ">Détails de l'offres</h1>
                <SimpleButton settings={{text:"Modifier", color:"bg-yellow-300", action:()=>{setIsEditing(true); reset(data)}}}/>
            </div>
            {/* en-tête */}
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col px-[1em] ">
                {isEditing &&<div className="flex"> <SubmitButton settings={{color:"bg-blue-600", text:"Valider" }}/></div>}
                <div className="flex space-x-2 items-center">
                    <p className="text-sm font-medium">Date: </p>
                    {isEditing?
                        <input 
                        type="date" 
                        class="text-sm p-0.5 border-gray-200 rounded text-gray-600 m-0.5" 
                        {...register("date",{required:"La date est obligatoire"})}
                        />
                        :
                        <div className="text-sm">{data.date}</div>
                    }     
                </div>
                <div className="flex space-x-2 mb-2 items center">
                    <p className="text-sm font-medium">Reference appel d'offre:</p>
                    {isEditing?
                    <input 
                    type="text"  
                    class="text-sm p-0.5 border-gray-200 rounded text-gray-600 m-0.5" 
                    {...register("reference_ao",{required:"La référence de l'appel d'offre est obligatoire"})}
                    />
                    :
                    <div className="text-sm">{data.reference_ao}</div>
                    }
                </div>
            </div>
            {/*Fournisseur */}
            <div className="flex flex-col rounded shadow-lg bg-white pb-2 mb-2">
                <div className="flex font-bold rounded-t text-xl bg-zinc-200 px-[1em] text-gray-600">Fournisseur</div>
                <div className="flex flex-col px-[1em]">
                    <div className="flex space-x-2 px-[1em] items-center ">
                        <p className="font-medium text-md">Raison social:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 border-gray-200 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.raison_sociale`,{required:"La raison_sociale est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-md">{data.fournisseur.raison_sociale}</div>
                        }
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Adresse:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 border-gray-200 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.adresse`,{required:"L'adresse est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-md">{data.fournisseur.adresse}</div>
                        }
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">E-mail:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 border-gray-200 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.email`,{required:"L'email est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-md">{data.fournisseur.email}</div>
                        }
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Téléphone:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 border-gray-200 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.telephone`,{required:"Le telephone est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-md">{data.fournisseur.telephone}</div>
                        }
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Pays:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 border-gray-200 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.pays`,{required:"Le pays est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-md">{data.fournisseur.pays}</div>
                        }
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Secteur:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 border-gray-200 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.secteur`,{required:"Le secteur est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-md">{data.fournisseur.secteur}</div>
                        }
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Nombre année d'expertise:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 border-gray-200 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.nb_annee_exp`,{required:"Le nombre d'année d'expérience est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-md">{data.fournisseur.nb_annee_exp}</div>
                        }
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Code postale:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 border-gray-200 rounded text-gray-600 m-0.5" 
                        {...register(`fournisseur.email`,{required:"L'email est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-md">{data.fournisseur.code_postale}</div>
                        }
                    </div>
                </div>
            </div>
            {/* Détails */}
            <div className="font-bold text-xl flex px-[1em] text-gray-700 mt-4">
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
                {   isEditing?
                    fields.map( (field, index)=>(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300 w-32 text-sm"
                            {...register(`biens.${index}.designation`,{required:"La désignation est obligatoire"})}
                            />
                            </th>
                            <td class="px-6 py-4">
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300  w-32 text-sm"
                            {...register(`biens.${index}.marque`,{required:"La quantité du bien est obligatoire"})}
                            />
                            </td>
                            <td class="px-6 py-4">
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300 w-32 text-sm"
                            {...register(`biens.${index}.quantite`,{required:"L'unité est obligatoire"})}
                            />
                            </td>
                            <td class="px-6 py-4">
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300 w-32 text-sm"
                            {...register(`biens.${index}.unite`,{required:"L'unité est obligatoire"})}
                            />
                            </td>
                            <td class="px-6 py-4">
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300 w-32 text-sm"
                            {...register(`biens.${index}.prix_unitaire`,{required:"L'unité est obligatoire"})}
                            />
                            </td>
                            <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                ))
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
            </form >
            <div className="flex justify-end">
                <LinkButton settings={{to:PARENTURL, color:"bg-zinc-800", text:"retour"}}/>
            </div>
        </div>
    );
}
 
export default DetailsOffre;
import Erreur from "../Erreur";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { useQuery, useMutation , QueryClient} from "react-query";
import { fetchFournisseur, updateFournisseur } from "./apiCalls";
import LinkButton from "../LinkButton";
import { useForm, useFieldArray } from "react-hook-form";
import { useState, useEffect } from "react";
import SimpleButton from "../SimpleButton";
import SubmitButton from "../SubmitButton";

const DetailsFournisseur = () => {
    //route related stuff
    const { idFournisseur, id} = useParams();
    const PARENTURL = `/personnel/${id}/acquisition/fournisseurs`;
    //editionstuff
    const [isEditing, setIsEditing]=useState(false);
    //data fetching stuff
    const{ data, isLoading, isError, error, refetch}=useQuery('detail_fournisseur'+idFournisseur, ()=>fetchFournisseur(idFournisseur),{refetchOnMount:true});
    //mutation
    const mutation=useMutation(updateFournisseur,{
        onSuccess: data => {
            const queryClient=new QueryClient({});
            queryClient.setQueryData(['fournisseurs', { id: idFournisseur }], data)
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
        <div className="flex flex-col w-full h-screen p-4">
            <div className="flex justify-between m-2">
                <h1 className="font-bold text-2xl text-gray-600 ">Détails du fournisseur</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            {isEditing ?
            <div className="flex justify-end"> <SubmitButton settings={{color:"bg-blue-600", text:"Valider" }}/></div>
            :
            <SimpleButton settings={{text:"Modifier", color:"bg-yellow-300", action:()=>{setIsEditing(true); reset(data)}}}/>
            }
            <div className="flex flex-col rounded shadow-lg bg-white pb-2 mb-2">
                <div className="flex font-bold rounded-t text-xl bg-zinc-200 px-[1em] text-gray-600">Fournisseur</div>
                <div className="flex flex-col px-[1em]">
                    <div className="grid grid-cols-2 w-fit">
                        <p className="font-medium text-md ">Raison social:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm px-2 p-0.5 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`raison_sociale`,{required:"La raison_sociale est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5 ">{data.raison_sociale}</div>
                        }
                        <p className="font-medium text-md">Adresse:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm px-2 p-0.5 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`adresse`,{required:"L'adresse est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.adresse}</div>
                        }
                        <p className="font-medium text-md">E-mail:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm px-2 p-0.5 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`email`,{required:"L'email est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.email}</div>
                        }
                        <p className="font-medium text-md">Téléphone:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm px-2 p-0.5 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`telephone`,{required:"Le telephone est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.telephone}</div>
                        }

                        <p className="font-medium text-md">Pays:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 px-2 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`pays`,{required:"Le pays est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.pays}</div>
                        }
                        <p className="font-medium text-md">Secteur:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5  px-2 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`secteur`,{required:"Le secteur est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.secteur}</div>
                        }
                        <p className="font-medium text-md">Nombre année d'expertise:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 px-2 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`nb_annee_exp`,{required:"Le nombre d'année d'expérience est obligatoire"})}
                        />
                        :
                        <div className="font-normal  text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.nb_annee_exp}</div>
                        }
                        <p className="font-medium text-md">Code postale:</p>
                        {isEditing?
                        <input 
                        type="text"  
                        class="text-sm p-0.5 px-2 border-gray-300 rounded text-gray-600 m-0.5" 
                        {...register(`code_postale`,{required:"Le code postal est obligatoire"})}
                        />
                        :
                        <div className="font-normal text-sm text-gray-600 px-2 p-0.5 m-0.5">{data.code_postale}</div>
                        }
                    </div>
                    <div className="flex flex-col">
                        <p className=" text-md font-bold text-gray-600">Activité</p>
                        <div className="grid grid-cols-2 w-fit p-2">
                            <div className="text-md text-gray-600 font-semibold">Marché:</div>
                            <div className="text-md text-gray-600 px-2">2</div>
                            <div className="text-md text-gray-600 font-semibold">Offre:</div>
                            <div className="text-md text-gray-600 px-2">4</div>
                        </div>
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
 
export default DetailsFournisseur;
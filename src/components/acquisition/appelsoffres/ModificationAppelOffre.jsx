import { useFieldArray, useForm } from "react-hook-form"
import Erreur from "../Erreur";
import Loading from "../Loading";
import { useMutation, useQuery } from "react-query";
import SubmitButton from "../SubmitButton";
import { updateAppelOffre, fetchAppelOffre } from "./apiCall";
import { useEffect } from "react";
import SimpleButton from "../SimpleButton";
const ModificationAppelOffre = ({idAppel}) => {
    //data fetching
    const{ data,isLoading, isError, error}=useQuery('detail_appel_offre_for_update', ()=>fetchAppelOffre(idAppel));
    //mutation
    const mutation=useMutation(updateAppelOffre)
    //Form shits
    const{register, handleSubmit, reset, formState, control}=useForm({ mode:'onSubmit'});
    const{fields, append, remove}=useFieldArray({
        control,
        name:'biens'
    });
    const{errors}=formState;
    const onSubmit=async (form_data)=>{
        await mutation.mutate(form_data);
    }
    useEffect(()=>{
        if(data){
            reset(data);
        }
    },[data]);
    if(isLoading) 
    return (
        <Loading/>
        );

    if(isError){
        console.log(error)
        return (<Erreur/>);
    } 
    return ( 
        <div className="flex flex-col overflow-y-auto   p-[2em] scrollbar">
            <div className="">
            <form action="" className="flex flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>
                {/*Information générale */}
                <div className="flex flex-col py-2 space-y-2 shadow-lg border-[1px] rounded-lg p-[2em]">   
                <h1 className="text-lg font-bold"> Information générale</h1>                
                <label htmlFor="reference" className="text-zinc-500">Réference</label>
                <input 
                type="text" 
                className="outline:none rounded-lg h-8 border-zinc-300"
                {...register("reference",{required:"La référence est oblogatoire"})}
                />
                <span className="text-sm text-red-700">{errors.reference?.message}</span>
                <label htmlFor="reference" className="text-zinc-500">Objet du marché</label>
                <input 
                type="text" 
                className="outline:none rounded-lg h-8 border-zinc-300"
                {...register("objet",{required:"L'objet du marché est obligatoire"})}
                />
                <span className="text-sm text-red-700">{errors.objet?.message}</span>
                <label htmlFor="reference" className="text-zinc-500">Budget</label>
                <input 
                type="text" 
                className="outline:none rounded-lg h-8 border-zinc-300"
                {...register("budget",{required:"Le budget est obligatoire"})}
                />
                <span className="text-sm text-red-700">{errors.budget?.message}</span>
                <label htmlFor="reference" className="text-zinc-500">description</label>
                <span className="text-sm text-red-700">{errors.description?.message}</span>
                <textarea 
                className="outline:none rounded-lg h-32 w- border-zinc-300"
                {...register("description",{required:"La description est obligatoire"})}
                />
                <label htmlFor="reference" className="text-zinc-500">Date limite réponse</label>
                <input 
                type="date" 
                className="outline:none rounded-lg h-8 border-zinc-300"
                {...register("dateLimite",{required:"La date limite est obligatoire"})}
                />
                <span className="text-sm text-red-700">{errors.dateLimite?.message}</span>
                </div>
                {/* Les biens */}
                <div className="flex flex-col space-y-2 p-2 border-[1px] rounded-lg p-[2em] shadow-lg">
                    <h1 className="text-lg font-bold">Les besoins en biens</h1>
                    {/*<div className="flex flex-col md:flex-row overflow-auto justify-between space-x-2">*/}
                    {fields.map((field,index)=>
                    <div className="flex flex-col rounded border-[2px] p-[1em]">
                    <div className="flex justify-between items-center">
                        <span className="text-zinc-600 font-bold ">{index+1}</span>
                        <svg onClick={()=>remove(index)} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="gray" viewBox="0 0 24 24" 
                            stroke="white" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 " key={field.id}>
                        <div className="flex flex-col space-y-2">
                            <label className="text-zinc-500">Désignation</label>
                            <input 
                            type="text" 
                            className="outline:none rounded h-8 border-zinc-300"
                            {...register(`biens.${index}.designation`,{required:"La désignation est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].designation?.message}</span> */}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-zinc-500">Quantité</label>
                            <input 
                            type="text" 
                            className="outline:none rounded h-8 border-zinc-300"
                            {...register(`biens.${index}.quantite`,{required:"La quantité du bien est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].index.quantite?.message}</span> */}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-zinc-500">Unité</label>
                            <input 
                            type="text" 
                            className="outline:none rounded h-8 border-zinc-300"
                            {...register(`biens.${index}.unite`,{required:"L'unité est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].unite?.message}</span> */}
                        </div>
                        <div className="flex flex-col space-y-2 col-span-1 md:col-span-3">
                            <label className="text-zinc-500">Decription</label>
                            <textarea
                            type="text" 
                            className="outline:none rounded h-16 border-zinc-300"
                            {...register(`biens.${index}.descriptionBien`,{required:"La description du bien est obligatoire"})}
                            />
                        </div>
                    </div>
                    </div>
                    )}
                    <div className="flex justify-center">
                        <SimpleButton settings={{color:'bg-blue-600', text:'Ajouter', action:()=>append({})}}/>
                    </div>
                </div>
                <SubmitButton settings={{text:'Valider', color:'bg-zinc-800'}}/>
            </form>
            </div>
        </div>
     );
}
 
export default ModificationAppelOffre;
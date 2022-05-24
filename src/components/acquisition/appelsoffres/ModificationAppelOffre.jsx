import { useFieldArray, useForm } from "react-hook-form"
import Erreur from "../Erreur";
import Loading from "../Loading";
import { useMutation, useQuery , QueryClient } from "react-query";
import SubmitButton from "../SubmitButton";
import { updateAppelOffre, fetchAppelOffre } from "./apiCall";
import { useEffect } from "react";
import SimpleButton from "../SimpleButton";
const ModificationAppelOffre = ({idAppel, close}) => {
    const queryClient=new QueryClient({});
    //data fetching
    const{ data,isLoading, isError, error}=useQuery('detail_appel_offre_for_update', ()=>fetchAppelOffre(idAppel));
    //mutation
    const mutation=useMutation(updateAppelOffre,{
        onSuccess:async()=>{
            await queryClient.invalidateQueries('appelsoffres',{
                exact:true,
                refetchActive: true,
                refetchInactive: true
            },{ throwOnError:true, cancelRefetch:true })
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
        close();
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
        <div className="flex flex-col overflow-y-auto   px-[2em] scrollbar ">
            <div className="bg-white p-4">
            <form action="" className="flex flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>
                {/*Information générale */}
                <div className="flex flex-col py-2 space-y-2 shadow-lg border-[1px] rounded-lg p-[2em]">   
                <h1 className="text-lg font-bold text-gray-600 "> Information générale</h1>                
                <label htmlFor="reference" className="text-zinc-500 font-semibold">Réference</label>
                <input 
                type="text" 
                className="outline:none border-0 border-b-2 h-8 border-zinc-300 text-sm text-zinc-600"
                {...register("reference",{required:"La référence est oblogatoire"})}
                />
                <span className="text-sm text-red-700">{errors.reference?.message}</span>
                <label htmlFor="reference" className="text-zinc-500 font-semibold">Objet de l'appel d'offre</label>
                <input 
                type="text" 
                className="outline:none border-0 border-b-2 h-8 border-zinc-300 text-sm text-zinc-600"
                {...register("objet",{required:"L'objet du marché est obligatoire"})}
                />
                <span className="text-sm text-red-700">{errors.objet?.message}</span>
                <label htmlFor="reference" className="text-zinc-500 font-semibold">Budget</label>
                <input 
                type="text" 
                className="outline:none border-0 border-b-2 h-8 border-zinc-300 text-sm text-zinc-600"
                {...register("budget",{required:"Le budget est obligatoire"})}
                />
                <span className="text-sm text-red-700">{errors.budget?.message}</span>
                <label htmlFor="reference" className="text-zinc-500 font-semibold ">description</label>
                <span className="text-sm text-red-700">{errors.description?.message}</span>
                <textarea 
                className="outline:none border-0 border-b-2 h-32 w- border-zinc-300 text-sm text-zinc-600"
                {...register("description",{required:"La description est obligatoire"})}
                />
                <label htmlFor="reference" className="text-zinc-500 font-semibold">Date limite réponse</label>
                <input 
                type="date" 
                className="outline:none border-0 border-b-2 h-8 border-zinc-300 text-sm text-zinc-600"
                {...register("dateLimite",{required:"La date limite est obligatoire"})}
                />
                <span className="text-sm text-red-700">{errors.dateLimite?.message}</span>
                </div>
                {/* Les biens */}
                <div className="mt-4 flex flex-col space-y-4 p-2 border-[1px] rounded-lg p-[2em] shadow-lg">
                    <h1 className="text-lg font-bold text-gray-600">Les besoins en biens</h1>
                    {/*<div className="flex flex-col md:flex-row overflow-auto justify-between space-x-2">*/}
                    {fields.map((field,index)=>
                    <div className="flex flex-col rounded shadow-lg border-[1px] p-[1em] mx-2">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-2" key={field.id}>
                        <div className="flex flex-col ">
                            <label className="text-zinc-500 font-semibold">Désignation</label>
                            <input 
                            type="text" 
                            className="outline:none  h-8 border-zinc-300 text-sm border-0 border-b-2 text-zinc-600"
                            {...register(`biens.${index}.designation`,{required:"La désignation est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].designation?.message}</span> */}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-zinc-500 font-semibold">Quantité</label>
                            <input 
                            type="text" 
                            className="outline:none  h-8 border-zinc-300 text-sm border-0 border-b-2 text-zinc-600"
                            {...register(`biens.${index}.quantite`,{required:"La quantité du bien est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].index.quantite?.message}</span> */}
                        </div>
                        <div className="flex flex-col ">
                            <label className="text-zinc-500 font-semibold">Unité</label>
                            <input 
                            type="text" 
                            className="outline:none  h-8 border-zinc-300 text-sm border-0 border-b-2 text-zinc-600"
                            {...register(`biens.${index}.unite`,{required:"L'unité est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].unite?.message}</span> */}
                        </div>
                        <div className="flex flex-col  col-span-1 md:col-span-3">
                            <label className="text-zinc-500 font-semibold">Decription</label>
                            <textarea
                            type="text" 
                            className="outline:none  border-zinc-300 text-sm  text-zinc-600"
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
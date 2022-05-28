import Erreur from "../Erreur";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
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
        <div className="flex flex-col p-[1em] space-y-2 w-full">
            <div className="flex justify-between m-2">
                <h1 className="font-bold text-2xl text-gray-600 ">Détails du marché</h1>
            </div>
            <form  className="" onSubmit={handleSubmit(onSubmit)}>
            {isEditing ?
            <div className="flex justify-end"> <SubmitButton settings={{color:"bg-blue-600", text:"Valider" }}/></div>
            :
            <SimpleButton settings={{text:"Modifier", color:"bg-yellow-300", action:()=>{setIsEditing(true); reset(data)}}}/>
            }
            </form>
            <div className="flex justify-end">
                <LinkButton settings={{to:PARENTURL, color:"bg-gray-600", text:"retour"}}/>
            </div>
        </div>
     );
}
 
export default DetailsMarches;
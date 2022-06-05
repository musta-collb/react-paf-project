import SimpleButton from "../acquisition/SimpleButton.jsx"
import SubmitButton from "../acquisition/SubmitButton.jsx"
import { useState } from "react";
import axios from '../../axios.js';
import { useMutation } from "react-query";
import AsyncSelect from 'react-select/async'
import { useForm } from "react-hook-form";
import { createAffectation } from "./apiCall.js";
import formatDate from "../../utils/dateFormater.js";

const CreationAffectation = () => {
    const [articles, setArticles]=useState([])
    //query stuff
    const mutation=useMutation(createAffectation);
    //form stuff
    const{ register, handleSubmit }=useForm({mode:'onSubmit'})
    //MultiSelect Stuff
    const loadOptions=async(inputValue,callback)=>{
        const  res=await axios.get(`/articles?q=${inputValue}`)
        const requestResults=res.data;
        callback(requestResults);
    }
    const customStyles={
        input:(provided, state)=>{
            console.log(state)
            return {
            ...provided,
            color:state.isFocused? 'blue':'red'
        }},
        multiValue:(provided, state)=>({
            ...provided,
            backgroundColor:'#6495ED'
        }),  
    }
    const handleChange=(selectedOptions)=>{
        console.log(selectedOptions)
        setArticles(selectedOptions)
    }
    //Submitting form
    const onSubmit=(data)=>{
        console.log(data)
        const affectation={...data, articles, details:"", date:formatDate(new Date())}
        mutation.mutate(affectation)
    }
    return (
        
            <form className="flex flex-col m-[2em] h-screen w-full space-y-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex">
                    <p className="font-bold text-xl">Nouvel affectation:</p>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 w-full bg-gray-200 py-4 px-6 border-gray-400 border-[1px] rounded">
                    <div className="flex flex-col space-y-2 w-full">
                        <label className="text-gray-700 font-semibold">Type Exploiteur:</label>
                        <select 
                        className="rounded border-gray-300 text-gray-600"
                        {...register(`exploiteur.type`,{required:"Le type de l'exploiteur est obligatoire"})}
                        >
                            <option value="Bureau">Bureau</option>
                            <option value="Departement">Departement</option>
                            <option value="Personnel">Personnel</option>
                        </select>
                        <label className="text-gray-700 font-semibold">Responsable:</label>
                        <input 
                        className="rounded border-gray-300 text-gray-600" 
                        type="text"
                        {...register("exploiteur.responsable",{required:"Le responsable est obligatoire"})}
                        />
                        <label className="text-gray-700 font-semibold">Durée:</label>
                        <input 
                        className="rounded border-gray-300 text-gray-600" 
                        type="text"
                        {...register("duree",{required:"la duree est obligatoire"})}
                        />
                    </div>
                    <div className="flex flex-col space-y-2 w-full focus:outline-none">
                        <div className="text-gray-700 font-semibold">Articles:</div>
                        <AsyncSelect 
                        onChange={handleChange}
                        loadOptions={loadOptions}
                        getOptionLabel={ a=>a.designation+" "+a.id }
                        getOptionValue={ a=>a.id}
                        cacheOptions
                        hideSelectedOptions={true}
                        isMulti
                        styles={customStyles}
                        placeholder={''}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <SubmitButton settings={{text:"créer", color:"bg-zinc-600"}}/>
                </div>
            </form>
    );
}
 
export default CreationAffectation;
import { useForm, useFieldArray } from 'react-hook-form';
import { useMutation } from 'react-query';
import { createOffre } from './apiCalls';
import  SubmitButton  from '../SubmitButton';
import SimpleButton from '../SimpleButton';
const CreationOffre = () => {
    //mutation
    const mutation=useMutation(createOffre)
    //Form shits
    const{register, handleSubmit, formState, control}=useForm({
        defaultValues:{biens:[{designation:'', marque:'', quantite:'',unite:'',prix_unitaire:''}]},
        mode:'onSubmit'
    });
    const{fields, append, remove}=useFieldArray({
        control,
        name:'biens'
    });
    const{errors}=formState;
    const onSubmit=async (data)=>{
        await mutation.mutate(data);
        console.log(data)
    }
    return ( 
        <div className="w-full flex flex-col overflow-y-auto px-[2cm] space-y-2 pb-[1em]">
            <h1 className="py-3 text-2xl font-bold">Enregistrement d'un offre</h1>
            <form className="flex flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>
                {/* Référence à l'appel d'offre */}
                <div className="flex flex-col  shadow-lg border-[1px] rounded-lg p-[2em] ">
                    <div class="mb-6">
                        <label for="reference_ao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Réference Appel d'offre</label>
                        <input 
                        type="text"  
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        {...register("reference_ao",{required:"La référence de l'appel d'offre est obligatoire"})}
                        />
                    </div>
                    <div class="mb-6">
                        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                        <input 
                        type="date" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        {...register("date",{required:"La date est obligatoire"})}
                        />
                    </div>
                </div>
                {/* Le fournisseur */}
                <div className="flex flex-col shadow-lg space-y-6 rounded-lg m-[1em] p-[2em]">
                <div className="text-xl font-bold p-1">Coordonnée du fournisseur</div>
                <div class="relative z-0 w-full mb-6 group">
                    <input 
                    type="text"  
                    placeholder=" "
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    {...register(`fournisseur.raison_socilale`,{required:"La raison_sociale est obligatoire"})}
                    />
                    <label for="floating_raison_sociale" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Raison sociale</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input 
                    type="text" 
                    placeholder=" " 
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    {...register(`fournisseur.email`,{required:"L'email est obligatoire"})}
                    />
                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input
                     type="tel" 
                     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  
                     placeholder=" "
                     class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     {...register(`fournisseur.telephone`,{required:"Le téléphone est obligatoire"})}
                     />
                    <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telephone</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input 
                    type="text"  
                    placeholder=" "
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    {...register(`fournisseur.adresse`,{required:"La référence est obligatoire"})}
                    />
                    <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse</label>
                </div>
                <div class="grid xl:grid-cols-2 xl:gap-4">
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        type="text"  
                        placeholder=" "
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        {...register("fournisseur.pays",{required:"La référence est obligatoire"})}
                        />
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pays</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        type="text" 
                        placeholder=" "
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        {...register(`fournisseur.code_postale`,{required:"La référence est obligatoire"})}
                        />
                        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Code postale</label>
                    </div>
                </div>
                <div class="grid xl:grid-cols-2 xl:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        type="text"
                        placeholder=" "
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        {...register(`fournisseur.secteur`,{required:"Le secter est obligatoire"})}
                        />
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Secteur</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        type="text" 
                        placeholder=" "
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        {...register(`fournisseur.nb_annee_exp`,{required:"Le nombre d'année d'expertise est obligatoire"})}
                        />
                        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Annee expertise</label>
                    </div>
                </div>
                </div>
                {/* les biens */}
                <div className="flex flex-col py-2 space-y-2 shadow-lg border-[1px] rounded-lg p-[2em]">
                <div className="flex text-md font-bold">Détails des biens</div>
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
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 " key={field.id}>
                        <div className="flex flex-col space-y-2 col-span-3">
                            <label className="font-medium">Désignation</label>
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300"
                            {...register(`biens.${index}.designation`,{required:"La désignation est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].designation?.message}</span> */}
                        </div>
                        <div className="flex flex-col space-y-2 col-span-3">
                            <label className="font-medium">Marque</label>
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300"
                            {...register(`biens.${index}.marque`,{required:"La quantité du bien est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].index.quantite?.message}</span> */}
                        </div>
                        <div className="flex flex-col space-y-2 col-span-2">
                            <label className="font-medium">Quantité</label>
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300"
                            {...register(`biens.${index}.quantite`,{required:"L'unité est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].unite?.message}</span> */}
                        </div>
                        <div className="flex flex-col space-y-2 col-span-2 ">
                            <label className="font-medium">Unité</label>
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300"
                            {...register(`biens.${index}.unite`,{required:"L'unité est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].unite?.message}</span> */}
                        </div>
                        <div className="flex flex-col space-y-2 col-span-2 ">
                            <label className="font-medium">Prix unitaire</label>
                            <input 
                            type="text" 
                            className="text-zinc-500 outline:none rounded h-8 border-zinc-300"
                            {...register(`biens.${index}.prix_unitaire`,{required:"L'unité est obligatoire"})}
                            />
                            {/* <span className="text-sm text-red-700">{errors.biens[index].unite?.message}</span> */}
                        </div>
                    </div>
                    </div>
                    )}
                    <div className="flex justify-center">
                        <SimpleButton settings={{color:"bg-green-600", text:"Ajouter", action:()=>append({})}}/>
                    </div>
                </div>
            <SubmitButton settings={{text:'Enregistrer', color:'bg-indigo-500'}}/>
            </form>
        </div>
     );
}
 
export default CreationOffre;
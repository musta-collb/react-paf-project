import SimpleButton from "../SimpleButton";

const DeleteModal = ({context}) => {
    const handleDelete=async ()=>{
        await fetch("http://localhost:5500/appelsoffres/"+context.idAppel,{method:"DELETE"});
        context.closeDeleteModal();
    }
    return ( 
        <div className="flex items-center w-screen  h-screen bg-zinc-900 bg-opacity-50 absolute top-0 left-0 ">
            <div className="flex flex-col rounded-lg  m-auto mt-auto bg-zinc-200 p-[2em]">
               <div className="flex justify-between p-2 space-x-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p>
                        Êtes-vous sûr de vouloir supprimer cet appel d'offre.
                    </p>
               </div>
               <div className="flex justify-center space-x-4 p-2">
                   <SimpleButton settings={{action:context.closeDeleteModal, color:"bg-indigo-700", text:"Annuler"}}/>
                   <SimpleButton settings={{action:handleDelete, color:"bg-red-600", text:"Oui"}}/>  
               </div>
            </div>
        </div>
     );
}
 
export default DeleteModal;
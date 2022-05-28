
import ModificationAppelOffre from "./ModificationAppelOffre";

const UpdateModal = ({context}) => {
    return ( 
        <div  className="flex items-center w-full pt-[3em] border-2 border-zinc-600  h-full bg-zinc-900  bg-opacity-40 absolute top-0 left-0">
            <div className="m-auto flex flex-col w-2/3 h-5/6 overflow-y-auto bg-zinc-200 p-1 rounded-lg">
                <div className="flex justify-between  shadow-lg  items-center p-2">
                        <p className="mx-2 text-sm text-gray-600 font-semibold">Modification</p>
                        <svg 
                            onClick={context.closeUpdateModal}
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="gray" viewBox="0 0 24 24" 
                            stroke="white" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                </div>
                <ModificationAppelOffre idAppel={context.idAppel} close={context.closeUpdateModal} refetch={context.refetch}/>
            </div>
        </div>
     );
}
 
export default UpdateModal;
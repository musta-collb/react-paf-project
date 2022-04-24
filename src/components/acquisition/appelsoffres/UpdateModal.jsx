import CreationAppelOffre from "./CreationAppelOffre";
import ModificationAppelOffre from "./ModificationAppelOffre";

const UpdateModal = () => {
    return ( 
        <div className="z-auto flex items-center w-full pt-[5em]  h-full bg-zinc-900 bg-opacity-50 absolute top-0 left-0">
            <div className="m-auto flex flex-col w-2/3 overflow-y-auto bg-zinc-300 p-1 rounded-lg">
                <ModificationAppelOffre/>
            </div>
        </div>
     );
}
 
export default UpdateModal;
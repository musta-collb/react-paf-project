import LinkButton from "../LinkButton";
import { useParams } from "react-router-dom";

const Offre = ({offre}) => {
    const { id } = useParams();
    const PARENTURL = `/personnel/${id}/acquisition/offres`;
    return ( 
        <div className="flex px-[1em]">
        <div className="flex flex-col h-fit w-full bg-white shadow-lg rounded p-2">
                <div className="flex  px-1 space-x-2 mx-4">
                    <p className="font-semibold text-gray-600 text-sm">Reference appel d'offre :</p>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{offre.reference_ao}</span>
                </div>
                <div className="flex  px-1 space-x-2 mx-4">
                    <p className="font-semibold text-gray-600 text-sm">Date de reception :</p>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{offre.date}</span>
                </div>
                <div className="flex  px-1 space-x-2 mx-4">
                    <p className="font-semibold text-gray-600 text-sm">Fornisseur:</p>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{offre.fournisseur.raison_sociale}</span>
                </div>
                <div className="flex justify-start px-1 space-x-2 mx-4">
                    <LinkButton settings={{to:PARENTURL + `/${offre.id}`, color:"bg-gray-600", text:"Détails"}}/>
                </div>
        </div>
    </div>
     );
}
 
export default Offre;
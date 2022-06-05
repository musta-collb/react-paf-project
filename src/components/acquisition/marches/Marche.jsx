import LinkButton from "../LinkButton";

const Marche = ({marche}) => {
    return ( 
        <div className="flex px-[1em]">
        <div className="flex justify-between w-full overflow-x-auto items-center mx-2 bg-white rounded shadow px-2">
            <div className="flex">
                <span className="text-gray-600 font-semibold text-sm p-1">Marché N°:</span>
                <div className=" p-1">{marche.id}</div>
            </div>
            <div className="flex">
                <span className="text-gray-600 font-semibold text-sm p-1">Date:</span>
                <div className=" text-sm text-gray-500 p-1">{marche.date}</div>
            </div>
            <div className="flex">
                <span className="text-gray-600 font-semibold text-sm p-1">référence appel d'offre:</span>
                <div className="text-sm text-gray-500 p-1">{marche.offre.reference_ao}</div>
            </div>
            <div className="flex">
                <span className="text-gray-600 font-semibold text-sm p-1">fournisseur:</span>
                <div className="text-sm text-gray-500 p-1">{marche.fournisseur.raison_sociale}</div>
            </div>
            <LinkButton settings={{color:"bg-gray-600", text:"plus ...", to:"../marches/"+marche.id}}/>
        </div>
    </div>
     );
}
 
export default Marche;
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchAffectation } from "./apiCall";
import Loading from "../acquisition/Loading";
import Erreur from "../acquisition/Erreur";

const DetailsAffectation = () => {
    const { idAffectation }=useParams();
    const { data, isLoading, isError}=useQuery('detail_affectation'+idAffectation,()=>fetchAffectation(idAffectation));

    if(isLoading) 
    return (
        <div className="w-full h-screen flex items-center m-auto">    
                <Loading/>
        </div>
        );

    if(isError)
        return (
            <div className="w-full h-screen  flex items-center m-auto">
                <Erreur/>
            </div>
        );
    
    return ( 
    <div className="w-full h-screen m-[2em]">
        <div className="flex flex-col">
            <p className="font-bold text-lg text-gray-600">Détails affectation</p>
            {/*Exploiteur*/}
            <div className="flex flex-col p-4">
                <div className="flex">
                    <p className="text-sm font-semibold">
                        Date:
                    </p>
                    <span className="text-sm px-2">
                        {data.date}
                    </span>
                </div>
                <div className="flex">
                    <p className="font-semibold">
                        Détails:
                    </p>
                    <span className="px-2">
                    {data.details}
                    </span>
                </div>
                <div className="flex">
                    <p className="font-semibold">
                        Durée:
                    </p>
                    <span className="px-2">
                    {data.duree}
                    </span>
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                    <p className="font-semibold">
                        Exploiteur:
                    </p>
                    </div>
                    <div className="flex flex-col mx-4">
                        <div className="flex">
                            <p className="">Type:</p>
                            <span className="mx-2">{data.exploiteur.type}</span>
                        </div>
                        <div className="flex">
                            <p className="">Responsable:</p>
                            <span className="mx-2">{data.exploiteur.responsable}</span>
                        </div>
                        <div className="flex">
                            <p className="">Description:</p>
                            <span className="mx-2">{data.exploiteur.description}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*Articles*/}
            <p className="font-bold text-lg text-gray-600 ">Les articles</p>
            {
                data.articles.map((article)=><div className="px-4">{article.designation}</div>)
            }
        </div>
    </div> 
    );
}
 
export default DetailsAffectation;
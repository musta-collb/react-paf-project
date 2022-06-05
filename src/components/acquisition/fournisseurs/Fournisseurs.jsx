import React, { PureComponent } from "react";
import { fetchAllFournisseurs } from "./apiCalls"
import Loading from "../Loading";
import Erreur from "../Erreur";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Fournisseur from "./Fournisseur";
const Fournisseurs = () => {
    const{isLoading, isError, data, error,status}=useQuery('fournisseurs',fetchAllFournisseurs);

  if(isLoading) 
  return (
    <Loading/>
    );

  if(isError){
    console.log(error)
    return (<Erreur/>);
  } 
  
  return (
    <div  className="flex flex-col grow space-y-2 bg-gray-100">
      {/* en-tête */}
      <div className="flex  flex-col flex-none drop shadow-lg px-4  pt-2 pb-2">
        <h1 className=" font-bold text-2xl text-zinc-600">
          Les fournisseurs
        </h1>
      </div>
      {/* Les offres d'offres */}
      {/* <div className="p-3  flex flex-col bg-gray-100 flex-auto space-y-2 h-screen overflow-y-auto scrollbar "> */}
      <div className="px-[2em] pt-[1em]">
      <div className="grid grid-cols-3 gap-4"> 
        {data.map((f) => (
           <Fournisseur fournisseur={f}/>
        ))}
      </div>
      </div>
    </div>);
}
 
export default Fournisseurs;
import React, { PureComponent } from "react";
import {fetchAllMarches} from "./apiCalls"
import Loading from "../Loading";
import Erreur from "../Erreur";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Marche from "./Marche";
import LinkButton from "../LinkButton";

const Marches = () => {
  const{isLoading, isError, data, error,status}=useQuery('marches',fetchAllMarches);

  if(isLoading) 
  return (
    <Loading/>
    );

  if(isError){
    console.log(error)
    return (<Erreur/>);
  } 
  
  return (
    <div  className="flex flex-col grow space-y-2">
      {/* en-tête */}
      <div className="flex  flex-col flex-none drop shadow-lg px-4  pt-2 pb-2">
        <h1 className=" font-bold text-2xl text-zinc-600">
          Les marchés
        </h1>
        <div className="flex flex-col md:flex-row space-y-2 justify-end p-2 items-center float-right">
          <LinkButton settings={{ text:"Nouveau marché", color:"bg-blue-600", to:"creationmarches"}}/>
        </div>
      </div>
      {/* Les offres d'offres */}
      <div className="p-3  flex flex-col bg-gray-100 flex-auto space-y-2 h-screen overflow-y-auto scrollbar ">
        {data.map((m) => (
           <Marche marche={m}/>
        ))}
      </div>
    </div>);
};

export default Marches;

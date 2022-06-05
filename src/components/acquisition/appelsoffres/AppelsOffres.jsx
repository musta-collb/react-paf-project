import AppelOffre from "./AppelOffre";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";
import {useQuery} from "react-query";
import Erreur from "../Erreur";
import Loading from "../Loading";
import { fetchAllAppelOffre } from "./apiCall";
import { useEffect , useState} from "react";

const AppelsOffres = () => {
  const{isLoading, isError, data, error,status, refetch}=useQuery('appelsOffres',fetchAllAppelOffre);
  if(isLoading) return (<Loading/>);
  if(isError) return (<Erreur/>);
  return (
    <div  className="flex flex-col grow space-y-2 ">
      {/* en-tête */}
      <div className="flex  flex-col flex-none drop shadow-lg px-4  pt-1 pb-2">
        <h1 className=" font-bold text-2xl text-zinc-600 underline">
          Les appels d'offres
        </h1>
        <div className="flex justify-end">
          <LinkButton settings={{ text:"Nouveau", color:"bg-blue-600", to:"../creationappelsoffres"}}/>
        </div>
        {/* <div className="flex flex-col md:flex-row space-y-2 justify-end p-2 items-center float-right">
          <button className="flex space-x-2 items-center bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Link
              to="../creationappelsoffres"
              className="font-semibold text-sm text-white "
            >
              Add
            </Link>
          </button>
        </div> */}
      </div>
      {/* Les appels d'offres */}
      <div className="p-3  flex flex-col flex-auto space-y-4 overflow-y-auto h-screen scrollbar bg-gray-100 ">
        {data.map((ao) => (
          <AppelOffre appelOffre={ao} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default AppelsOffres;

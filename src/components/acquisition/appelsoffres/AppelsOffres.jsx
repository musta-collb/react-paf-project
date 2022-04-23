import AppelOffre from "./AppelOffre";
import { Link } from "react-router-dom";
import {useQuery} from "react-query";

const fetchAO=async()=>{
  const res=await fetch("http://localhost:5500/appelsoffres");
  if(!res.ok){
    throw new Error("Erreur!")
  }
  return res.json();
}

const AppelsOffres = () => {
  
  const{isLoading, isError, data, error,status}=useQuery('appelsOffres',fetchAO);

  if(isLoading) return (<div>Loading ...</div>);

  if(isError){
    console.log(error)
    return (<div>Error!</div>);
  } 
  
  return (
    <div  className="flex flex-col grow space-y-2">
      {/* en-tête */}
      <div className="flex  flex-col flew-none drop shadow-lg px-4  pt-1 pb-2">
        <h1 className=" font-bold text-2xl text-zinc-600">
          Les appels d'offres
        </h1>
        <div className="flex flex-col md:flex-row space-y-2 justify-between p-2 items-center float-right">
          <button className="flex space-x-2 items-center bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-lg">
            <Link
              to="../creationappelsoffres"
              className="font-semibold text-sm text-white "
            >
              Add
            </Link>
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
          </button>
        </div>
      </div>
      {/* Les appels d'offres */}
      <div className="p-3  flex flex-col flex-auto space-y-2 ">
        {data.map((ao) => (
          <AppelOffre appelOffre={ao} />
        ))}
      </div>
    </div>
  );
};

export default AppelsOffres;

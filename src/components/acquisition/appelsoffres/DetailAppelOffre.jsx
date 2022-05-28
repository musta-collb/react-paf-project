import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import LinkButton from "../LinkButton";
import Erreur from "../Erreur";
import Loading from "../Loading";
import { fetchAppelOffre } from "./apiCall";

const DetailAppelOffre = () => {
  //route related stuff
  const { idAppel , id } = useParams();
  const PARENTURL = `/personnel/${id}/acquisition/appelsoffres`;
  //data fetching stuff
  const{ data, isLoading, isError, error}=useQuery('detail_appel_offre', ()=>fetchAppelOffre(idAppel));

  if(isLoading) 
  return(<Loading/>);
  if(isError) return(<Erreur/>)
  return (
    <div className="flex flex-col grow space-y-2 p-[2em] overflow-y-auto bg-gray-100">
      <div className="">
        <span className="text-lg font-bold  text-gray-600 ">Informations générales</span>
      </div>
      {/* info général */}
      <div className="flex flex-col border-[1px] space-2 rounded bg-white shadow-lg">
        <div className="flex bg-gray-200 rounded-t">
          <div className="flex space-x-2 w-full mx-4 my-2">
            <span className="font-semibold text-zinc-600">Reference:</span>
            <span className="text-gray-600">{data.reference}</span>
          </div>
          <div className="flex space-x-2 w-full mx-4 my-2">
            <span className="font-semibold text-zinc-600">Date:</span>
            <span className="text-gray-600 text-sm">{data.dateLimite}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 my-2 mx-4 w-fit">
          <span className="font-semibold text-zinc-600">Budget:</span>
          <span className="text-gray-600 text-sm">{data.budget}</span>
          <span className="font-semibold text-zinc-600">Objet:</span>
          <span className="text-gray-600 text-sm">{data.objet}</span>
          <span className="font-semibold text-zinc-600">
            Date limite reponse:
          </span>
          <span className="text-gray-600 text-sm">{data.dateLimite}</span>
          <span className="font-semibold text-zinc-600">
            Date de livraison au plus tard:
          </span>
          <span className="text-gray-600 text-sm">{data.dateLimite}</span>
        </div>
        <div className="flex flex-col space-x-2 mx-4 mb-2">
          <span className="font-semibold text-zinc-600">Descriptions:</span>
          <span className="text-sm text-gray-700">{data.description}</span>
        </div>
        <div className="flex space-x-2 mx-4 mb-2 items-center">
          <span className="font-semibold text-zinc-600">
            Réponses Associées:
          </span>
          <span className="text-gray-600 ">3</span>
        </div>
      </div>
      {/* détails bordereau */}
      <div className="">
        <span className="text-lg font-bold text-gray-600">Détail des besoins</span>
      </div>
      <table className="w-full bg-white shadow-lg">
        <tr className="border-b-[1px]  bg-sky-500">
          <th className="font-semibold text-sm text-zinc-600 p-2 text-left">
            Designation bien
          </th>
          <th className="font-semibold text-sm text-zinc-600 p-2 text-left">
            Descriptions
          </th>
          <th className="font-semibold text-sm text-zinc-600 p-2 text-left">Quantité</th>
          <th className="font-semibold text-sm text-zinc-600 p-2 text-left">unité</th>
        </tr>
        <tbody className="p-2">
          {data.biens.map((b) => (
            <tr key={b} className="border-b-[1px] bg-white">
              <td className="text-sm p-2">{b.designation}</td>
              <td className="text-sm p-2">{b.description}</td>
              <td className="text-sm p-2">{b.quantite}</td>
              <td className="text-sm p-2">{b.unite}</td>
            </tr>
          ))}
        </tbody>
        </table>
      <div className="flex justify-end px-4">
        <LinkButton settings={{to:PARENTURL, color:"bg-zinc-800", text:"retour"}}/>
      </div>
    </div>
  );
};

export default DetailAppelOffre;

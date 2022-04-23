import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import fetchAO from "./fetchAO";

const DetailAppelOffre = () => {
  //route related stuff
  const { idAppel } = useParams();
  const { id } = useParams();
  const PARENTURL = `/personnel/${id}/acquisition/appelsoffres`;
  //data fetching stuff
  const{ data, isLoading, isError, error}=useQuery('detail_appel_offre', ()=>fetchAO("http://localhost:5500/appelsoffres/"+idAppel));

  if(isLoading) return(<div>Loading ...</div>);
  if(isError) return(<div>Error!</div>)
  return (
    <div className="flex flex-col grow space-y-2 p-[2em] overflow-y-auto">
      <div className="">
        <span className="text-lg font-bold">Informations générales</span>
      </div>
      {/* info général */}
      <div className="flex flex-col border-[1px] space-2 px-[2em] py-2">
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">Reference:</span>
          <span className="">{data.reference}</span>
        </div>
        <div className="flex space-x-2 ">
          <span className="font-semibold text-zinc-600">Date:</span>
          <span className="">{data.date}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">Budget:</span>
          <span className="">{data.budget}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">Objet:</span>
          <span className="">{data.objet}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">
            Date limite reponse:
          </span>
          <span className="">{data.dateLimite}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">
            Date de livraison au plus tard:
          </span>
          <span className="">{data.dateLivraison}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">Descriptions:</span>
          <span className="">{data.description}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">
            Réponses Associés:
          </span>
          <span className="">!!!!il faut mettre le nombre de réponse associé ici</span>
        </div>
      </div>
      {/* détails bordereau */}
      <div className="">
        <span className="text-lg font-bold">Détail des besoins</span>
      </div>
      <table className="w-full">
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
            <tr key={b} className="border-b-[1px]">
              <td className="text-sm p-2">{b.designation}</td>
              <td className="text-sm p-2">{b.description}</td>
              <td className="text-sm p-2">{b.quantite}</td>
              <td className="text-sm p-2">{b.unite}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end px-4">
        <Link to={PARENTURL} className=" rounded px-2 bg-red-300">
          retour
        </Link>
      </div>
    </div>
  );
};

export default DetailAppelOffre;

import { Link, useParams } from "react-router-dom";
const DetailAppelOffre = () => {
  const biens = ["s", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d"];
  const { idOffre } = useParams();
  const { id } = useParams();
  const PARENTURL = `/personnel/${id}/acquisition/appelsoffres`;
  console.log("idOffre: " + { idOffre });
  return (
    <div className="flex flex-col grow w-full space-y-2 p-2 overflow-y-auto">
      <div className="">
        <span className="text-lg font-bold">Informations générales</span>
      </div>
      {/* info général */}
      <div className="flex flex-col border-[1px] space-2 p-2 ">
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">Reference:</span>
          <span className="">reference</span>
        </div>
        <div className="flex space-x-2 ">
          <span className="font-semibold text-zinc-600">Date:</span>
          <span className="">sldfjdkjfd</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">Budget:</span>
          <span className="">sldjfkdfkd</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">Objet:</span>
          <span className="">lskkdjfkdkfd</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">
            Date limite reponse:
          </span>
          <span className="">sdlfjdkjfkd</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">
            Date de livraison au plus tard:
          </span>
          <span className="">sdlfjdkjfkd</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">Descriptions:</span>
          <span className="">reference</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-semibold text-zinc-600">
            Réponses Associés:
          </span>
          <span className="">reference</span>
        </div>
      </div>
      {/* détails bordereau */}
      <div className="">
        <span className="text-lg font-bold">Détail des besoins</span>
      </div>
      <table className="w-full">
        <tr className="border-b-[1px]  bg-sky-500">
          <th className="font-semibold text-sm text-zinc-600 p-2">
            Designation bien
          </th>
          <th className="font-semibold text-sm text-zinc-600 p-2">
            Descriptions
          </th>
          <th className="font-semibold text-sm text-zinc-600 p-2">Quantité</th>
          <th className="font-semibold text-sm text-zinc-600 p-2">unité</th>
        </tr>
        <tbody className="p-2">
          {biens.map((b) => (
            <tr key={b} className="border-b-[1px]">
              <td className="text-sm p-2">ldfjdksfkd</td>
              <td className="text-sm p-2">dlfdkjfkdf</td>
              <td className="text-sm p-2">sldfkdjfdd</td>
              <td className="text-sm p-2">dfsdfdfdsfd</td>
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

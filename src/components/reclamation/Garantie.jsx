import React, { PureComponent } from "react";
import { Link, useParams } from "react-router-dom";

const Garantie = (props) => {
  const { garantie } = props;
  const { id } = useParams();
  return (
    <div class="p-2 px-6 my-2 bg-white rounded-lg border border-gray-200 shadow-md ">
      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
        {garantie.designation}
      </h5>
      <ul className="flex">
        <li className="italic mx-2">
          <span className="font-bold">date de debut: </span>
          {garantie.dateDebut}
        </li>
        <li className="italic mx-2">
          <span className="font-bold">durée: </span>
          {garantie.duree}mois
        </li>
        <li className="italic mx-2">
          <span className="font-bold">réference contrat: </span>
          <span className="rounded-full px-2 bg-green-500 text-white">
            {garantie.refContrat}
          </span>
        </li>
      </ul>
      <p class="mb-3 font-normal text-gray-700 ">{garantie.type}</p>
      <Link to={`/personnel/${id}/reclamation/articles/${garantie.idArticle}`}>
        <p class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
          Voir article détails
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </p>
      </Link>
    </div>
  );
};

export default Garantie;

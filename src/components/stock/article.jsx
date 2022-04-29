import React, { PureComponent, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Article = (props) => {
  const { id, idCat } = useParams();
  const { article } = props;
  const [showModel, setShowModel] = useState(false);
  const handleClick = () => {
    let value = !showModel;
    setShowModel(value);
  };
  return (
    <div class="md:flex md:flex-col mx-6 md:mx-auto sm:h-30 my-1 max-w-lg md:max-w-2xl max-h-72 flex-wrap border md:overflow-hidden">
      <div className="md:w-2/12 hidden md:flex align-center ">
        <img
          class="w-full object-cover rounded-lg rounded-r-none pb-5/6"
          src={article.image}
          alt="bag"
        />
      </div>
      {/* Model Image */}
      {/* {showImage && 
      <div className="w"></div>} */}
      <div class="w-full relative md:w-10/12 px-4 py-4 bg-white rounded-lg">
        <p className="under-line">{article.codeBar}</p>
        <div class="flex items-center flex-col">
          <div className="w-full flex justify-around">
            <h2 class="text-xl text-gray-800 font-medium mr-auto">
              {article.designation}
            </h2>
            <h2>date:{" " + article.dateAquisition}</h2>
          </div>

          <br />
          <p class="text-gray-800 font-semibold tracking-tighter">
            prix unitaire:{" "}
            <i class="text-gray-600 underline">{article.prixUnitaire}DH</i> |{" "}
            prix totale:{" "}
            <i class="text-gray-600 underline">{article.prixTotale}DH</i>
          </p>
        </div>

        <div className="w-full h-10 overflow-hidden">
          <p class="text-sm text-gray-700 mt-4">{article.description}</p>
        </div>
        <span
          className="text-gray-500 m-0 text-sm cursor-pointer"
          onClick={handleClick}
        >
          Voir plus
        </span>
        {/* Model */}
        {showModel && (
          <div className="top-0 left-0 w-full absolute h-full bg-white">
            <h1 className="m-2 font-semibold">Description:</h1>
            <div className="w-full">
              {" "}
              <p class="text-sm text-gray-700 m-3">{article.description}</p>
            </div>

            <button
              className="underline text-red-900 float-right m-4"
              type="button"
              onClick={handleClick}
            >
              Fermer
            </button>
          </div>
        )}

        <hr className="m-1"></hr>
        <div className="w-full flex-wrap flex text-gray-500 text-bold ">
          conditionnement:{" "}
          <div className="bg-green-600 text-sm rounded-full px-2 text-white">
            {article.conditionnement}
          </div>
          marque:{" "}
          <div className="bg-blue-600 text-sm rounded-full px-2 text-white">
            {article.marque}
          </div>
        </div>
        <div className="w-full m-1 flex-wrap flex text-gray-500 text-bold ">
          poids:{" "}
          <div className="under-line text-bold rounded-full px-2 text-gray-800">
            {article.poids + " kg"}
          </div>
          Etat:{" "}
          <div className="bg-yellow-600 text-sm rounded-full px-2 text-white">
            {article.etat}
          </div>
        </div>
        <div class="flex items-center justify-end mt-4 top-auto">
          <Link
            to={`/personnel/${id}/stock/categories/${idCat}/articles/${article.id}`}
          >
            <button class=" bg-gray-200 text-blue-600 p-1 px-3 rounded-md mr-2">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Article;

import React, { PureComponent } from "react";
import { Link, useParams } from "react-router-dom";

const ArticleGenerique = (props) => {
  const { id } = useParams();
  const { idCat } = useParams();
  const { articleRenerique } = props;
  return (
    <div className="md:w-10/12 w-11/12 my-2 shadow-md  mx-auto border rounded">
      {/* disignation */}
      <h1 className="text-2xl text-bolder m-3">
        {articleRenerique.desgniation}
      </h1>
      <hr />
      {/* quantites */}
      <div className="w-full mt-4 flex-wrap px-10 flex justify-around">
        <h3 className="text-semibold text-gray-700">
          Quantité minimal:{" "}
          <span className="px-1 bg-red-700 text-white text-sm rounded">
            {articleRenerique.quantiteMin + " " + articleRenerique.unite}
          </span>
        </h3>
        <h3 className="text-semibold text-gray-700">
          Quantité maximal:{" "}
          <span className="px-1 bg-green-500 text-sm text-white rounded">
            {articleRenerique.quantiteMax + " " + articleRenerique.unite}
          </span>
        </h3>
        <h3 className="text-semibold text-gray-700">
          Quantité disponible:{" "}
          <span className="px-1 bg-blue-600 text-sm  text-white rounded">
            {articleRenerique.quantiteDisponible + " " + articleRenerique.unite}
          </span>
        </h3>
      </div>
      {/* contorols */}
      <div className="w-full flex justify-end px-10 x-space-2 my-3">
        <Link to={`/personnel/${id}/stock/categories/${articleRenerique.id}`}>
          <button
            type="submit"
            class="mb-2 mx-1 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded hover:shadow-lg hover:bg-green-500"
          >
            Modifier
          </button>
        </Link>
        <Link
          to={`/personnel/${id}/stock/categories/${articleRenerique.id}/articles`}
        >
          <button
            type="submit"
            class="mb-2 mx-1 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded hover:shadow-lg hover:bg-blue-500"
          >
            Voir les articles
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ArticleGenerique;

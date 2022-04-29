import React, { PureComponent } from "react";
import ArticleGenerique from "./articleGenerique";
import { Link, useParams } from "react-router-dom";
const ArticlesGenerique = () => {
  const { id } = useParams();
  // categories
  const articlesRenerique = [
    {
      id: 12,
      desgniation:
        '2021 Newest HP Premium Envy Laptop, 13.3" FHD IPS Display, 11th Gen Intel Core i5-1135G7',
      quantiteMin: 34,
      quantiteMax: 13,
      quantiteDisponible: 45,
      unite: "Kg",
    },
    {
      id: 12,
      desgniation:
        '2021 Newest HP Premium Envy Laptop, 13.3" FHD IPS Display, 11th Gen Intel Core i5-1135G7',
      quantiteMin: 34,
      quantiteMax: 13,
      quantiteDisponible: 45,
      unite: "Kg",
    },
    {
      id: 12,
      desgniation:
        '2021 Newest HP Premium Envy Laptop, 13.3" FHD IPS Display, 11th Gen Intel Core i5-1135G7',
      quantiteMin: 34,
      quantiteMax: 13,
      quantiteDisponible: 45,
      unite: "Kg",
    },
  ];
  return (
    <div className="w-full my-4">
      <div className="flex justify-around p-2">
        <h1 className="text-4xl font-semibold">Catégories:</h1>
        <button className="flex space-x-2  items-center bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-lg">
          <Link
            to={`/personnel/${id}/stock/nouvelleCategorie`}
            className="font-semibold text-sm text-white "
          >
            Créer une categorie
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
      {articlesRenerique.map((cat) => {
        return <ArticleGenerique articleRenerique={cat} />;
      })}
    </div>
  );
};

export default ArticlesGenerique;

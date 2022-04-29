import React, { PureComponent } from "react";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const { idArticle } = useParams();
  const article = {
    id: 12,
    codeBar: "Y47834837",
    designation: "hp Elitebook 40",
    prixUnitaire: 23.89,
    prixTotale: 30.02,
    description:
      "Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.",
    conditionnement: "12 Unité par pack",
    marque: "hp",
    poids: 12,
    image:
      "https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg",
    dateAquisition: "20/10/2022",
    etat: "Neuf",
    fournisseur: "test fournisseur",
  };
  return (
    <div class="md:flex w-full items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img class="w-full" alt="image of a girl posing" src={article.image} />
      </div>
      <div class="md:hidden">
        <img class="w-full" alt="image of a girl posing" src={article.image} />
      </div>
      <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div class="border-b border-gray-200 pb-6">
          <p class="text-xl text-gray-700 ">{article.designation}</p>
          <p class="text-base leading-4 mt-7 text-gray-900">
            Code Barre :{" "}
            <span className="italic underline font-bold">
              {article.codeBar}
            </span>
          </p>
        </div>
        <div class="py-4 border-b border-gray-200 flex items-center justify-between">
          <p class="text-md ">Prix Unitaire:</p>
          <div class="flex items-center justify-center">
            <p class="text-md leading-none text-gray-900 italic">
              {article.prixUnitaire}
            </p>
          </div>
        </div>
        <div class="py-4 border-b border-gray-200 flex items-center justify-between">
          <p class="text-md ">Prix Totale:</p>
          <div class="flex items-center justify-center">
            <p class="text-md leading-none text-gray-900 italic">
              {article.prixTotale}
            </p>
          </div>
        </div>
        <div class="py-4 border-b border-gray-200 flex items-center justify-between">
          <p class="text-md ">Marque:</p>
          <div class="flex items-center justify-center">
            <p class="text-md leading-none text-gray-900 italic">
              {article.marque}
            </p>
          </div>
        </div>
        <div class="py-4 border-b border-gray-200 flex items-center justify-between">
          <p class="text-md ">Conditionnement:</p>
          <div class="flex items-center justify-center">
            <p class="text-md leading-none text-gray-900 italic">
              {article.conditionnement}
            </p>
          </div>
        </div>
        <div>
          <p class=" text-base lg:leading-tight leading-normal text-gray-900 italic mt-7">
            {article.description}
          </p>
        </div>
        <div class="py-4 border-b border-gray-200 flex items-center justify-between">
          <p class="text-md ">Fournisseur:</p>
          <div class="flex items-center justify-center">
            <p class="text-md leading-none text-gray-900 italic">
              {article.fournisseur}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;

import React, { PureComponent } from "react";
import Article from "./article";

const Articles = () => {
  const articles = [
    {
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
    },
    {
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
    },
  ];
  return (
    <div className="w-full h-full">
      {articles.map((article) => {
        return <Article article={article} />;
      })}
    </div>
  );
};
export default Articles;

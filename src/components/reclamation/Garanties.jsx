import React, { PureComponent } from "react";
import { useParams } from "react-router-dom";
import Garantie from "./Garantie";

const Garanties = () => {
  const garanties = [
    {
      id: 13,
      dateDebut: "22/12/2011",
      duree: "12",
      refContrat: "C123383",
      type: "réparation",
      idArticle: 3,
      designation: "youfs",
    },
    {
      id: 13,
      dateDebut: "22/12/2011",
      duree: "12",
      refContrat: "C123383",
      idArticle: 3,
      type: "réparation",
      designation: "youfs",
    },
    {
      id: 13,
      dateDebut: "22/12/2011",
      idArticle: 3,
      duree: "12",
      refContrat: "C123383",
      type: "réparation",
      designation: "youfs",
    },
    {
      id: 13,
      dateDebut: "22/12/2011",
      idArticle: 3,
      duree: "12",
      refContrat: "C123383",
      type: "réparation",
      designation: "youfs",
    },
  ];
  const { id } = useParams();
  return (
    <div className="w-full p-2 flex justify-around flex-wrap">
      {garanties.map((garantie) => {
        return <Garantie garantie={garantie} />;
      })}
    </div>
  );
};

export default Garanties;

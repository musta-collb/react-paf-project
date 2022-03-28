import React, { Component, PureComponent } from "react";
import Card from "../components/cartesAcceuil";
import Display from "../components/display";
import NavBar from "../components/navBar";
import Presentation from "../components/aPropos";
import Footer from "../components/footer";

const Index = () => {
  const items = [
    {
      titre: "fonction fornisseur",
      description:
        "Les points de connexion entre l'entreprise et l'exterieur, il gère le relation avec le fornisseur",
      imageUrl: "../images/img2.jpg",
    },
    {
      titre: "fonction stock",
      description:
        "elle s'occupe d'enregitrer les nouveaux produit entrants à l'entreprise",
      imageUrl: "../images/img3.jpg",
    },
    {
      titre: "fonction affectation",
      description:
        "Elle gére les affectations e.g qui est le responsable sur un tel équipement",
      imageUrl: "../images/img4.jpg",
    },
    {
      titre: "fonction ",
      description:
        "Elle gére les affectations e.g qui est le responsable sur un tel équipement",
      imageUrl: "../images/img4.jpg",
    },
  ];
  return (
    <div className="min-h-full mb-0">
      <NavBar />
      {/**the content */}
      {/* <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header> */}

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Display />
          <hr className="my-8" />
          <Presentation />
          <hr className="my-8" />
          <div className="w-full flex justify-center text-6xl">
            <h1 className="px-3">Nos fonctions:</h1>
          </div>

          {/* les fonctions */}
          <div className="w-full flex flex-wrap justify-around my-10">
            {items.map((item) => {
              return (
                <Card
                  titre={item.titre}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              );
            })}
          </div>

          <hr className="px-6" />
        </div>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};
export default Index;

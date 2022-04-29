import React, { PureComponent } from "react";
import { Outlet, useParams } from "react-router-dom";
import SideBar from "../components/acquisition/SideBar";

const Reclamation = () => {
  const { id } = useParams();
  console.log("id: " + id);
  // NavBar side links
  const myLinks = [
    {
      title: "Garanties",
      destination: `/personnel/${id}/reclamation/garanties`,
    },
    {
      title: "Nouvelle Garantie",
      destination: `/personnel/${id}/reclamation/nouvelleGarantie`,
    },
  ];
  const user = {
    id: 12,
    nom: "Mustapha",
    prenom: "id-yahia",
    role: ["Admin", "User"],
    email: "must@gmail.com",
    fonction: "testing",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  };
  return (
    <div className="flex flex-col w-full">
      {/* header */}
      <div className="flex sm:flex-row flex-col">
        {/* sidebar */}
        <SideBar links={myLinks} user={user} />
        {/* <SideBarBeta /> */}
        {/* content */}
        <Outlet />
        <div className="w-1/6 bd-zinc-400"></div>
      </div>
    </div>
  );
};

export default Reclamation;

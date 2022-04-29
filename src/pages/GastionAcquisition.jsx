import { Outlet, useParams } from "react-router-dom";
import AppelsOffres from "../components/acquisition/AppelsOffres";
// import Header from "../components/acquisition/Header";
import SideBar from "../components/acquisition/SideBar";
// import SideBarBeta from "../components/acquisition/sideBarBeta";
const GestionAcquisition = () => {
  const { id } = useParams();
  console.log("id: " + id);
  // NavBar side links
  const myLinks = [
    {
      title: "Appel d'offres",
      destination: `/personnel/${id}/acquisition/appelsoffres`,
    },
    {
      title: "Offres",
      destination: `/personnel/${id}/acquisition/offres`,
    },
    {
      title: "Marché",
      destination: `/personnel/${id}/acquisition/marche`,
    },
    {
      title: "Fournisseurs",
      destination: `/personnel/${id}/acquisition/fournisseurs`,
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

export default GestionAcquisition;

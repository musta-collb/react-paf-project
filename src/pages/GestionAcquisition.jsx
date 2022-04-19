import { Outlet, useParams } from "react-router-dom";
import AppelsOffres from "../components/acquisition/appelsoffres/AppelsOffres";
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
  return (
    <div className="flex flex-col w-full">
      <div className="flex sm:flex-row flex-col grow">
        {/* sidebar */}
        <SideBar links={myLinks} />
        {/* content */}
        <Outlet />
        <div className="w-1/6 bd-zinc-400"></div>
      </div>
    </div>
  );
};

export default GestionAcquisition;

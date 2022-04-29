import React, { PureComponent } from "react";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";

const Principale = () => {
  const { id } = useParams();
  // Links
  const myLinks = [
    {
      title: "Dashboard",
      destination: "/",
      active: true,
    },
    {
      title: "acquisition",
      destination: `/personnel/${id}/acquisition/appelsoffres`,
      active: true,
    },
    {
      title: "stock",
      destination: `/personnel/${id}/stock/categories`,
      active: true,
    },
    {
      title: "reclamation",
      destination: `/personnel/${id}/reclamation/garanties`,
      active: true,
    },
  ];
  return (
    <div className="w-full">
      <NavBar links={myLinks} />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Principale;

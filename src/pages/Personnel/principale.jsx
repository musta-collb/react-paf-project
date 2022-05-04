import React, { PureComponent, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";
import useAuth from "../../hooks/useAuth";

const Principale = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  console.log(user)
  const getUserLinks=(user)=>{
    let links=[
      {
        title:"Se deconnecter",
        destination:"/",
        active:true
      }
    ];
    user.roles.forEach((role)=>{
      let title;
      let destination;
      switch(role){
        case 'ACQUISITION':
            title="Acquisition";
            destination=`/personnel/${id}/acquisition`;
            break;
        case 'AFFECTATION':
            title="Affectation";
            destination=`/personnel/${id}/affectation`;
            break;
        case 'RECLAMATION':
            title="Réclamation";
            destination=`/personnel/${id}/reclamation`;
            break;
        default:
          break;
      }
      links.push({
          title,
          destination,
          active:true
      });
    });
    return links
  }
  const myLinks=getUserLinks(user);
  return (
    <div className="w-full ">
      <NavBar links={myLinks} />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Principale;

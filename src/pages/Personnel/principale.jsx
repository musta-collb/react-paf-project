import React, { PureComponent, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";
import useAuth from "../../hooks/useAuth";

const Principale = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const getUserLinks=(user)=>{
    var links=[
      {
        title:"Se deconnecter",
        destination:"/",
        active:true
      }
    ];
    user.roles.forEach((role)=>{
      switch(role){
        case 'ACQUISITION':
            links.push({
              title:"Acquisition",
              destination:`/personnel/${id}/acquisition`,
              active:true
            });
            break;
        case 'AFFECTATION':
            links.push({
              title:"Affectation",
              destination:`/personnel/${id}/affectation`,
              active:true
            });
            break;
        case 'RECLAMATION':
            links.push({
              title:"Réclamation",
              destination:`/personnel/${id}/reclamation`,
              active:true
            });
            break;
        default:
          break;
      }
    });
    return links;
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

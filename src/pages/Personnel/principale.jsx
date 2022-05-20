import React, { PureComponent, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";
import useAuth from "../../hooks/useAuth";

const Principale = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const getUserLinks=(user)=>{
    if(user==null) navigate('/personnel/login')
    var links=[
      {
        title:"Accueil",
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
              destination:`/personnel/${id}/ticket_reclamation`,
              active:true
            });
            break;
        case 'REBUT':
            links.push({
              title:"Rébut",
              destination:`/personnel/${id}/rebut`,
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

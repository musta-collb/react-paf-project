import React, { PureComponent } from "react";
import LinkButton from "../LinkButton";

const Fournisseur = ({fournisseur}) => {
  return (
     <div className="flex flex-col rounded shadow-lg bg-white pb-2 mb-2">
                <div className="flex font-bold rounded-t text-xl text-gray-600 bg-zinc-200 px-[1em] py-1">
                  Fournisseur-{fournisseur.id}
                </div>
                <div className="flex flex-col px-[1em]">
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Raison social:</p>
                        <div className="font-normal text-md text-gray-500">{fournisseur.raison_sociale}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Adresse:</p>
                        <div className="font-normal text-md text-gray-500">{fournisseur.adresse}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">E-mail:</p>
                        <div className="font-normal text-md text-gray-500">{fournisseur.email}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Téléphone:</p>
                        <div className="font-normal text-md text-gray-500">{fournisseur.telephone}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Pays:</p>
                        <div className="font-normal text-md text-gray-500">{fournisseur.pays}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Secteur:</p>
                        <div className="font-normal text-md text-gray-500">{fournisseur.secteur}</div>
                    </div>
                    <div className="flex space-x-2 px-[1em]">
                        <p className="font-medium text-md">Code postale:</p>
                        <div className="font-normal text-md text-gray-500">{fournisseur.code_postale}</div>
                    </div>
                    <div className="flex justify-end px-[1em]">
                      <LinkButton settings={{color:"bg-gray-600", text:"plus ...", to:"../fournisseurs/"+fournisseur.id}}/>
                    </div>
                </div>
            </div>
  );
}
export default Fournisseur;

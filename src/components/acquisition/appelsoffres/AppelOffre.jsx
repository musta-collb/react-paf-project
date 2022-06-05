import { Link, useParams } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import usePortal from 'react-useportal'
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import LinkButton from "../LinkButton";
const AppelOffre = (props) => {
  //Route stuff
  const { id } = useParams();
  const PARENTURL = `/personnel/${id}/acquisition/appelsoffres`;
  const { appelOffre, refetch } = props;
  //Portalstuff
  //For deletion
  const useDeleteModal=()=>{
    const{Portal, isOpen, openPortal, closePortal }=usePortal();
    return{
      DeletionPortal:Portal,
      isDeleteModalOpen:isOpen,
      openDeleteModal:openPortal,
      closeDeleteModal:closePortal
    }
  }
  const{DeletionPortal, isDeleteModalOpen,openDeleteModal,closeDeleteModal}=useDeleteModal();
  
  //For updates
  const useUpdateModal=()=>{
    const{Portal, isOpen, openPortal, closePortal }=usePortal();
    return{
      UpdatePortal:Portal,
      isUpdateModalOpen:isOpen,
      openUpdateModal:openPortal,
      closeUpdateModal:closePortal
    }
  }
  const{UpdatePortal, isUpdateModalOpen,openUpdateModal,closeUpdateModal}=useUpdateModal();

  return (
    <div className="flex px-[1em]">
    <div  className="flex flex-col border-0 h-fit w-full bg-white shadow-lg   rounded">
      {/* En-tête */}
      <div className="flex justify-between bg-zinc-200  px-3 py-1 rounded-t">
        <div className="flex flex-col">
          <h1 className="text-gray-700 text-sm">
            <span className="font-semibold text-sm">Reference :</span>{" "}
            {appelOffre.reference}
          </h1>
          <span className="text-gray-700 text-sm">
            <span className="font-semibold text-sm">date</span>: {appelOffre.dateLimite}
          </span>
        </div>
        <div className="flex justify-between space-x-5 items-center">
          <div  className="">
            <Tippy content="Modifier">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="orange"
              stroke-width="2"
              data-modal-toggle="update-modal"
              onClick={openUpdateModal}
              >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
            </svg>
            </Tippy>
            {
              isUpdateModalOpen &&
              <UpdatePortal>
                <UpdateModal context={{idAppel:appelOffre.id, closeUpdateModal , refetch}}/>
              </UpdatePortal>  
            }
          </div>
          <div className="flex p-2">
            <Tippy content="Suprimer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="red"
              strokeWidth={2}
              onClick={openDeleteModal}
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
            </svg>
            </Tippy>
            {
              isDeleteModalOpen &&
              <DeletionPortal>
                <DeleteModal context={{idAppel:appelOffre.id,closeDeleteModal}}/>
              </DeletionPortal>  
            }
          </div>
        </div>
      </div>
      {/* bar */}
      {/* <div className="h-[1px] bg-black"></div> */}
      {/* corps */}
      <div className="flex justify-between px-3">
        {/* body */}
        <div className="flex">
          <span className="font-bold text-sm p-1">objet: </span>
          <span className="text-gray-500 text-sm p-1">{appelOffre.objet}</span>
        </div>
        {/* control */}
        <div className="flex flex-col justify-end space-2">
          <LinkButton settings={{to:PARENTURL + `/${appelOffre.id}`, color:"bg-gray-600", text:"Détails"}}/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AppelOffre;

import { Link, useParams } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import usePortal from 'react-useportal'
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
const AppelOffre = (props) => {
  //Route stuff
  const { id } = useParams();
  const {idAppel}=useParams();
  const PARENTURL = `/personnel/${id}/acquisition/appelsoffres`;
  const { appelOffre } = props;
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
  //For updates
  const{DeletionPortal, isDeleteModalOpen,openDeleteModal,closeDeleteModal}=useDeleteModal();

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
    <div  className="flex flex-col h-fit w-full bg-slate-100  p-3 rounded-lg">
      {/* En-tête */}
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1>
            <span className="font-semibold">Reference :</span>{" "}
            {appelOffre.reference}
          </h1>
          <span>
            <span className="font-semibold">date</span>: {appelOffre.date}
          </span>
        </div>
        <div className="flex justify-between space-x-5 items-center">
          <div  className="">
            <Tippy content="Modifier">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
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
                <UpdateModal/>
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
              stroke="currentColor"
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
                <DeleteModal context={{idAppel,closeDeleteModal}}/>
              </DeletionPortal>  
            }
          </div>
        </div>
      </div>
      {/* bar */}
      <div className="h-[1px] bg-black"></div>
      {/* corps */}
      <div className="flex justify-between">
        {/* body */}
        <div className="">
          <span className="font-bold">objet: </span>
          {appelOffre.objet}
        </div>
        {/* control */}
        <div className="flex flex-col justify-end space-5">
          <button className="bg-red-500 rounded py-1 my-2 px-4 text-sm text-zinc-100 drop-shadow-xl">
            <Link to={PARENTURL + `/${appelOffre.id}`}>Détails</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppelOffre;

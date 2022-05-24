import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Erreur from "../acquisition/Erreur";
import Loading from "../acquisition/Loading";
import { fetchTicket } from "./apiCall";
import Intervention from "./Intervention";
import Commentaire from "./Commentaire";
import SimpleButton from "../acquisition/SimpleButton.jsx";
import usePortal from "react-useportal";
import CommentModal from "./CommentModal";
const DetailsTicket=()=>{
    const {idTicket}=useParams();
    console.log(idTicket)
    const{isLoading, isError, data, error,status}=useQuery(`ticket_${idTicket}`,()=>fetchTicket(idTicket));
    //For comments
    const useCommentModal=()=>{
        const{Portal, isOpen, openPortal, closePortal }=usePortal();
        return{
          CommentPortal:Portal,
          isCommentModalOpen:isOpen,
          openCommentModal:openPortal,
          closeCommentModal:closePortal
        }
      }
      const{CommentPortal, isCommentModalOpen,openCommentModal,closeCommentModal}=useCommentModal();

  if(isLoading) 
  return (
      <div classNameName="w-full h-4/5 flex items-center m-auto">    
            <Loading/>
      </div>
    );

    if(isError){
        console.log(error)
        return (
            <div classNameName="w-ful h-4/5  flex items-center m-auto">
                <Erreur/>
            </div>
        );
    }
    return(
        <div className="flex flex-col w-full space-y-2 m-[2em]">
            <div className="flex flex-col space-y-2">
                <p className="text-lg text-white font-semibold bg-blue-600 px-2">General</p>
                <div className="flex flex-col p-2">
                <div className="text-sm"><span className="font-bold">Date : </span>{data.date}</div>
                <div className="text-sm"><span className="font-bold">Auteur : </span>{data.auteur}</div>
                <div className="text-sm"><span className="font-bold">Code bien : </span>{data.bien.code}</div>
                <div className="text-sm"><span className="font-bold">Déscription du problème : </span>{data.bien.code}</div>
                <div className="text-sm"><span className="font-bold">Etat : </span>{data.etat}</div>
                </div>
            </div>
            <div className="flex flex-col border-t-2">
                <p className="text-lg text-white font-semibold  bg-blue-600 px-2">Suivi</p>
                <div className="flex flex-row mx-[1em] space-x-2">
                    <div className="flex flex-col w-full p-4 shadow-lg h-1/4 ">
                        <p className="font-bold drop-shadow text-gray-600">Commentaires</p>
                        <div className="flex flex-col w-full mx-[1em] overflow-y-auto scrollbar space-y-2 p-2">

                            {
                            data.commentaires.map(commentaire=>(
                                <Commentaire commentaire={commentaire}/>
                                ))
                            }
                            </div>
                            <div className="flex justify-start">
                            <SimpleButton settings={{color:"bg-zinc-800", text:"Commenter", action:openCommentModal}}/>
                            </div>
                            {isCommentModalOpen&&
                                <CommentPortal>
                                    <CommentModal context={{ticket:data, closeCommentModal}}/>
                                </CommentPortal>
                            }
                    </div>
                    <div className="flex flex-col w-full p-4 shadow-lg h-1/4">
                        <p className="font-bold text-gray-600">Interventions</p>
                        <div className="flex flex-col w-full mx-[1em] p-2">

                            {/* {
                            data.interventions.map(intervention=>(
                                <Intervention intervention={intervention}/>
                                ))
                            } */}
                            <div className=" bg-white border-[1px] p-2 rounded">
                            Aucune interventions!
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <SimpleButton settings={{color:"bg-zinc-800", text:"Ajouter", action:()=>{}}}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailsTicket;
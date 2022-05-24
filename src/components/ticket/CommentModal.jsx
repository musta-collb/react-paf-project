import { Button } from "../../shared/Button";
import {useMutation} from 'react-query';
import {useForm} from 'react-hook-form';
import useAuth from '../../hooks/useAuth.js'
import { updateTicket } from "./apiCall";

const CommentModal = ({context}) => {
    //ticket
    const {ticket, closeCommentModal}=context;
    //user
    const{user}=useAuth();
    //Mutation
    const mutation=useMutation(updateTicket);
    //Form shits
    const{register, handleSubmit, reset, formState, control}=useForm({ mode:'onSubmit'});
    const onSubmit=async (form_data)=>{
        console.log("coment",form_data);
        console.log("ticket",context.ticket);
        if(form_data.content!==''){
            const comment={date:"23-05-2022",auteur:user.name, contenu:form_data.content}
            ticket.commentaires.push(comment);
            await mutation.mutate(ticket);
        }
        closeCommentModal();
        
    }
    return ( 
        <div  className="flex items-center w-full pt-[3em] border-2 border-zinc-600  h-full  bg-opacity-0 fixed top-0 left-0">
            <div className="flex flex-col ml-[3cm] bg-gray-100 borter-white p-1 rounded shadow-lg">
                <div className="flex justify-between items-center ">
                        <span className="text-md text-gray-600 p-2 font-semibold">Commentaire</span>
                        <svg 
                            onClick={context.closeCommentModal}
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="gray" viewBox="0 0 24 24" 
                            stroke="white" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                </div>
                <form className="flex flex-col mx-4" onSubmit={handleSubmit(onSubmit)}>
                    <textarea 
                    className="outline:none border-gray-300 w-64 h-32 scrollbar"
                    {...register("content")}/>
                    <div className="flex justify-end p-2">
                        <Button type="submit" className="text-xs p-1">OK</Button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default CommentModal;
import LinkButton from "../acquisition/LinkButton";

const Ticket=({ticket})=>{
    return ( 
        <div className="flex justify-between  items-center  shadow py-1 px-4  rounded bg-white mx-[1em]">
            <div className="flex items-center space-x-4">
                <div className="font-bold">ID_Ticket: </div>
                <span className="">{ticket.id}</span>
            </div>
            <div className="flex  space-x-4 items-center">                
                <div className="flex space-x-4">
                    <div className="font-semibold">Etat: </div>
                    <span className={ticket.etat==="OUVERT"? `px-2 rounded-lg bg-blue-400`:`px-2 rounded-lg bg-green-400`}>{ticket.etat}</span>
                </div>
                <div className="flex flex space-x-4">
                    <div className="">Commentaires</div>
                    <span className="">{ticket.commentaires.length}</span>
                </div>
                <div className="flex flex space-x-4">
                    <div className="">Interventions</div>
                    <span className="">{ticket.interventions.length}</span>
                </div>
                <LinkButton settings={{to:`${ticket.id}`, text:"plus ...", color:"bg-gray-600"}}/>
            </div>
        </div>
    );
}
export default Ticket;
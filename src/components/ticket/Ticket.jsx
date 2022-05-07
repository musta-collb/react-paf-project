import LinkButton from "../acquisition/LinkButton";

const Ticket=()=>{
    return ( 
        <div className="flex justify-between  items-center  p-4">
            <div className="flex items-center space-x-4">
                <div className="">ID_Ticket</div>
                <span className="">001</span>
            </div>
            <div className="flex  space-x-4 items-center">                
                <div className="flex space-x-4">
                    <div className="">Etat</div>
                    <span className="">Ouvert</span>
                </div>
                <div className="flex flex space-x-4">
                    <div className="">Commentaires</div>
                    <span className="">1</span>
                </div>
                <div className="flex flex space-x-4">
                    <div className="">Intervention</div>
                    <span className="">0</span>
                </div>
                <LinkButton settings={{to:"/", text:"plus ...", color:"bg-zinc-800"}}/>
            </div>
        </div>
    );
}
export default Ticket;
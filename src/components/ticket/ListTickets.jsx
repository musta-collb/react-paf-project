import Ticket from "./Ticket.jsx"
const ListTickets=()=>{
    const data=["","","","",]
    return (
        
            <div className="flex flex-col w-full space-y-4">
                <div className="p-4">
                    <p className="">Gestion des tickets</p>
                </div>
                <div className="flex flex-col">
                    {
                        data.map(ticket=><Ticket key={ticket}/>)
                    }
                </div>
            </div>
    );
}
export default ListTickets;
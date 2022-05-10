export const fetchAllTicket = async()=>{
    const res= await fetch("http://localhost:5500/tickets");
    if(!res.ok) {
        throw new Error("Erreur");
    }
    return res.json();
}
export const fetchTicket = async(id)=>{
    const res= await fetch("http://localhost:5500/tickets/"+id);
    if(!res.ok) {
        throw new Error("Erreur");
    }
    return res.json();
}
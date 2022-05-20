import axios from '../../axios.js'
export const fetchAllTicket = async()=>{
    const res= await axios.get('/tickets');
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
export const fetchTicket = async(id)=>{
    const res= await axios.get('/tickets/'+id);
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
export const updateTicket = ticket=>{
    return axios.put('/tickets/'+ticket.id,ticket);
}
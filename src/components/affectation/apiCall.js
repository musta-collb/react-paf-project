import axios from '../../axios.js'
export const createAffectation= affectaion=>{
    return axios.post('affectations',affectaion)
}
export const fetchAllAffectation = async()=>{
    const res= await axios.get('/affectations');
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
export const fetchAffectation = async(id)=>{
    const res= await axios.get('/affectations/'+id);
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
import axios from '../../../axios.js'

export const deleteOffre = id=>{
    return axios.delete('/offres/'+id)
}
export const createOffre = offre=>{
    return axios.post('offres',offre)
}
export const updateOffre = offre=>{
     return  axios.put('/offres/'+offre.id,offre)
     
}
export const fetchAllOffres = async()=>{
    const res= await axios.get('/offres');
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
export const fetchOffre = async(id)=>{
    const res= await axios.get('/offres/'+id);
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
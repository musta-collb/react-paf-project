import axios from '../../../axios.js'

export const deleteFournisseur = id=>{
    return axios.delete('/fournisseurs/'+id)
}
export const createFournisseur = marche=>{
    return axios.post('/fournisseurs',marche)
}
export const updateFournisseur = marche=>{
    return axios.put('/fournisseurs/'+marche.id,marche)
}
export const fetchAllFournisseurs = async()=>{
    const res= await axios.get('/fournisseurs');
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
export const fetchFournisseur = async(id)=>{
    const res= await axios.get('/fournisseurs/'+id);
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
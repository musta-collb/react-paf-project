import axios from '../../axios.js'
export const fetchAllRebut = async()=>{
    const res= await axios.get('/rebuts');
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
export const fetchRebut= async(id)=>{
    const res= await axios.get('/rebuts/'+id);
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
export const updateRebut = rebut=>{
    return axios.put('/rebuts/'+rebut.id,rebut);
}
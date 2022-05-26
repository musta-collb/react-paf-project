import axios from '../../../axios.js'

export const deleteMarche = id=>{
    return axios.delete('/marches/'+id)
}
export const createMarche = marche=>{
    return axios.post('marches',marche)
}
export const updateMarche = marche=>{
    return axios.put('/marches/'+marche.id,marche)
}
export const fetchAllMarches = async()=>{
    const res= await axios.get('/marches');
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
export const fetchMarche = async(id)=>{
    const res= await axios.get('/marches/'+id);
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
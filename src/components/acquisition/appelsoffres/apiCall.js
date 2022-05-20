import axios from '../../../axios.js';
  
export const deleteAppelOffre = id=>{
    return axios.delete('/appeloffres'+id);
}
export const createAppelOffre = appelOffre=>{
    console.log(" la structure de l'ao",appelOffre)
    return axios.post('/appelsoffres', appelOffre );
}
export const updateAppelOffre = appelOffre=>{
    return axios.put('/appelsoffres/'+appelOffre.id,appelOffre);
}
export const fetchAllAppelOffre = async()=>{
    const res=await axios.get('/appelsoffres');
    if(res.statusText!=='OK'){
        throw new Error("Erreur");
    }
    return res.data;
}
export const fetchAppelOffre = async(id)=>{
    const res= await axios.get('/appelsoffres/'+id);
    if(res.statusText!=='OK') {
        throw new Error("Erreur");
    }
    return res.data;
}
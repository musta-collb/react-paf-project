export const deleteAppelOffre = id=>{
        return fetch("http://localhost:5500/appelsoffres/"+id,{method:"DELETE"})
    }
export const createAppelOffre = appelOffre=>{
    return fetch("http://localhost:5500/appelsoffres",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(appelOffre)
    })
}
export const updateAppelOffre = appelOffre=>{
    return fetch("http://localhost:5500/appelsoffres/"+appelOffre.id,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(appelOffre)
    })
}
export const fetchAllAppelOffre = async()=>{
    const res= await fetch("http://localhost:5500/appelsoffres");
    if(!res.ok) {
        throw new Error("Erreur");
    }
    return res.json();
}
export const fetchAppelOffre = async(id)=>{
    const res= await fetch("http://localhost:5500/appelsoffres/"+id);
    if(!res.ok) {
        throw new Error("Erreur");
    }
    return res.json();
}
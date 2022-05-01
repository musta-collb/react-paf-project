export const deleteOffre = id=>{
    return fetch("http://localhost:5500/offres/"+id,{method:"DELETE"})
}
export const createOffre = offre=>{
return fetch("http://localhost:5500/offres",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(offre)
})
}
export const updateOffre = offre=>{
return fetch("http://localhost:5500/offres/"+offre.id,{
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(offre)
})
}
export const fetchAllOffres = async()=>{
const res= await fetch("http://localhost:5500/offres");
if(!res.ok) {
    throw new Error("Erreur");
}
return res.json();
}
export const fetchOffre = async(id)=>{
const res= await fetch("http://localhost:5500/offres/"+id);
if(!res.ok) {
    throw new Error("Erreur");
}
return res.json();
}
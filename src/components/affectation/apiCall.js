export const fetchAllAffectation = async()=>{
    const res= await fetch("http://localhost:5500/affectations");
    if(!res.ok) {
        throw new Error("Erreur");
    }
    return res.json();
}
export const fetchAffectation = async(id)=>{
    const res= await fetch("http://localhost:5500/affectations/"+id);
    if(!res.ok) {
        throw new Error("Erreur");
    }
    return res.json();
}
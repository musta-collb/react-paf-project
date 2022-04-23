const fetchAO=async(api_endpoint)=>{
    const res= await fetch(api_endpoint);
    if(!res.ok) {
        throw new Error("Erreur");
    }
    return res.json();
}
export default fetchAO;
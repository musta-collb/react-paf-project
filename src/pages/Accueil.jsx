import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LinkButton from "../components/acquisition/LinkButton";
const Accueil=()=>{
    const user=useAuth();
    useEffect(()=>{

    },[]);
    return(
        <div className="flex flex-col">
            <LinkButton settings={ {to:"/personnel/1/acquisition/appelsoffres" , color:"bg-red-500", text:"GO"}}/>
        </div>
    )
}
export default Accueil
import SimpleButton from "../acquisition/SimpleButton.jsx"
import SubmitButton from "../acquisition/SubmitButton.jsx"
import { useState } from "react";
import axios from '../../axios.js';
import { useQuery } from "react-query";
const CreationAffectation = () => {
    const [value, setValue]=useState('');
    const [suggestions, setSuggestions]=useState([]);
    const [isLoading, setisLoading]=useState(false);
    const search = async val => {
        setisLoading(true)
        const res = await axios.get(`/articles?designation=${value}&etat=dispo`);
        setSuggestions(res.data);
        setisLoading(false)
      };
    const onChangeHandler = async e => {
        search(e.target.value);
        setValue(e.target.value);
    };
    return (
        
            <form className="flex flex-col m-[2em] h-screen w-full space-y-2">
                <div className="flex">
                    <p className="font-bold text-xl">Nouvel affectation:</p>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 w-full">
                    <div className="flex flex-col space-y-2 w-full">
                        <label className="text-gray-700 font-semibold">Type Exploiteur:</label>
                        <select className="rounded border-gray-400 ">
                            <option value="burreau">Bureau</option>
                            <option value="burreau">Departement</option>
                            <option value="burreau">Personnel</option>
                        </select>
                        <label className="text-gray-700 font-semibold">Responsable:</label>
                        <input className="rounded border-gray-400" type="text"></input>
                        <label className="text-gray-700 font-semibold">Durée:</label>
                        <input className="rounded border-gray-400" type="text"></input>
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                        <div className="text-gray-700 font-semibold">Articles:</div>
                        <input 
                            className="rounded border-gray-400" 
                            type="text"
                            value={value}
                            onChange={e=> onChangeHandler(e)}
                        />
                        {isLoading
                         ? <div>Loading ...</div>
                         : 
                         suggestions.map((s)=><div className="flex justify-between"><label>{s.designation}</label><input type="checkbox" value={s.id}/></div>)
                        }
                    </div>
                </div>
                <div className="flex justify-end">
                    <SubmitButton settings={{text:"créer", color:"bg-zinc-600"}}/>
                </div>
            </form>
    );
}
 
export default CreationAffectation;
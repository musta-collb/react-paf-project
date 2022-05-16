import SimpleButton from "../acquisition/SimpleButton.jsx"
import SubmitButton from "../acquisition/SubmitButton.jsx"
const CreationAffectation = () => {
    return (
        
            <form className="flex flex-col m-[2em] h-screen w-full space-y-2">
                <div className="flex">
                    <p className="font-bold text-xl">Nouvel affectation:</p>
                </div>
                <div className="flex space-x-4 w-full">
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
                        <input className="rounded border-gray-400" type="text"/>
                        <SimpleButton settings={{text:"Ajouter" ,color:"bg-blue-600", action:()=>{}}}/>
                    </div>
                </div>
                <div className="flex justify-end">
                    <SubmitButton settings={{text:"créer", color:"bg-zinc-600"}}/>
                </div>
            </form>
    );
}
 
export default CreationAffectation;
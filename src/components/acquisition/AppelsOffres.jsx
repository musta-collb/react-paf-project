import AppelOffre from "./AppelOffre";

const AppelsOffres = () => {
    const appelsOffres=["s","s","s","s","s","s","s","s","s","s","s","s"];
    return ( 
        <div className="flex flex-col grow space-y-2">
           {/* en-tête */}
            <div className="flex  flex-col h-64 flew-none drop shadow-lg p-2 space-y-2">
                <h1>Les appels d'offres</h1>
                <div className="flex justify-between">
                    <input type="text" className="outline-none border-2 rounded"/>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[40px] w-[40px]" viewBox="0 0 20 20" fill="blue">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            {/* Les appels d'offres */}
            <div className=" p-3 overflow-y-auto flex flex-col flex-auto space-y-2 ">
            {appelsOffres.map((ao)=>
                <AppelOffre/>
                )}  
            </div>
        </div>
     );
}
 
export default AppelsOffres;
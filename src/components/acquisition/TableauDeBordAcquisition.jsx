import {useQuery} from 'react-query'
import { fetchAllMarches } from './marches/apiCalls';
import { fetchAllOffres } from './offres/apiCalls';
import { fetchAllAppelOffre } from './appelsoffres/apiCall';
import { fetchAllFournisseurs } from './fournisseurs/apiCalls';
import Erreur from './Erreur';
import Loading from './Loading';

const TableauDeBordAcquisition = () => {
    const {data:appelsoffres, isError:err_ao, isLoading:load_ao}=useQuery('appelsoffres',fetchAllAppelOffre)
    const {data:offres,  isError:err_o, isLoading:load_o}=useQuery('offres', fetchAllOffres)
    const {data:marches,  isError:err_f, isLoading:load_f}=useQuery('marches', fetchAllMarches)
    const {data:fournisseurs,  isError:err_fr, isLoading:load_fr}=useQuery('fournisseurs',fetchAllFournisseurs)
   
    if(load_ao || load_o || load_f || load_fr) return (<Loading/>);
    if(err_ao || err_o || err_f || err_fr) return (<Erreur/>);
    return ( 
        <div className="p-[2em] w-full h-screen bg-gray-100">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col bg-white shadow-lg rounded-lg p-2">
                    <div className="text-xl font-bold px-4">
                        Appels d'offres
                    </div>
                    <div className="text-5xl p-4">
                        {appelsoffres.length}
                    </div>
                </div>
                <div className="flex flex-col bg-white shadow-lg rounded-lg p-2">
                    <div className="text-xl font-bold px-4">
                        Offres
                    </div>
                    <div className="text-5xl p-4">
                    {offres.length}
                    </div>
                </div>
                <div className="flex flex-col bg-white shadow-lg rounded-lg p-2">
                    <div className="text-xl font-bold px-4 ">
                        Marché
                    </div>
                    <div className="text-5xl p-4">
                    {marches.length}
                    </div>
                </div>
                <div className="flex flex-col bg-white shadow-lg rounded-lg p-2">
                    <div className="text-xl font-bold px-4">
                        Fournisseurs
                    </div>
                    <div className="text-5xl p-4">
                    {fournisseurs.length}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TableauDeBordAcquisition;
import useAuth from "../../hooks/useAuth";
import LinkButton from "../acquisition/LinkButton";

const Rebut = ({rebut}) => {
    const{user}=useAuth();
    const BASE_URL=`/personnel/${user.id}/rebut/`
    return ( 
        <div className="flex flex-col border-2 p-4 mx-4 rounded bg-white">
            <div className="flex">
                <p className="text-sm font-bold text-gray-600">Date création: </p>
                <span className="px-4 text-gray-600 text-sm">{rebut.date}</span>
            </div>
            <div className="flex flex-col">
            <div className=" text-gray-600 font-semibold ">Description</div>
            <p className="">{rebut.description}</p>
            </div>
            <div className="flex items-center">
                <div className="flex justify-start w-full font-bold text-gray-600">Nombre articles: <span className="px-2 font-bold ">{rebut.articles.length}</span></div>
                <div className="flex justify-start w-full font-bold text-gray-600">Etat: <span className={`mx-2 text-md rounded-full text-zinc-100  px-4 font-normal ${rebut.acheteur===undefined? 'bg-green-400':'bg-blue-600'}`}>{rebut.acheteur===undefined? 'En attente d\'acheteur':'Vendu'}</span></div>
                <div className="flex justify-end w-full">
                    <LinkButton settings={{text:'plus ...', color:'bg-zinc-700', to:BASE_URL+rebut.id}}/>
                </div>
            </div>
        </div>
     );
}
 
export default Rebut;
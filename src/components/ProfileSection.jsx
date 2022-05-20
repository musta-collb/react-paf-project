import useAuth from '../hooks/useAuth.js';
import SimpleButton from './acquisition/SimpleButton.jsx';
import { useNavigate } from 'react-router-dom';
const ProfileSection = () => {
    const {user, logout} =useAuth();
    const navigate=useNavigate();
    const deconnexion=()=>{
        logout();
        navigate('/personnel/login')
    }
    return ( 
        <div className="flex flex-col w-full h-screen">

            <div className=" flex  justify-center items-center ">
                 {/* <img className="rounded-full w-16 h-16 overflow-hidden mt-[1cm] mb-4" src={require("../images/profile.jpg")}/> */}
                 <div className="flex rounded-full w-16 h-16 overflow-hidden mt-[1cm] mb-4">
                     <img src={require("../images/profile.jpg")}/>
                 </div>
            </div>
            <div className="flex flex-col mx-[2em] border-t-2">
                <p className="text-gray-700">{user.name}</p>
                <p className="text-gray-700">{user.email}</p>
            </div>
            <div className="flex justify-center">
                <SimpleButton settings={{text:"Deconnexion", color:"bg-orange-500", action:deconnexion}}/>
            </div>
        </div>
     );
}
 
export default ProfileSection;
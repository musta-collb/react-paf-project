import SideBar from "../components/acquisition/SideBar";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import ProfileSection from "../components/ProfileSection";
const GestionRebut = () => {
   const user=useAuth();
  // NavBar side links
  const myLinks = [
    {
      title: "Creation",
      destination: `/personnel/${user.id}/rebut/creation_rebut`,
    },
    {
      title: "Rebuts",
      destination: `/personnel/${user.id}/rebut`,
    },
    {
      title: "Acheteurs",
      destination: `/personnel/${user.id}/rebut/acheteurs`,
    }
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="flex sm:flex-row flex-col grow">
        {/* sidebar */}
        <SideBar links={myLinks} />
        {/* content */}
        <Outlet />
        <div className="w-1/6 bg-gray-100 flex flex-none">
          <ProfileSection/>
        </div>
      </div>
    </div>
  );
}
 
export default GestionRebut;
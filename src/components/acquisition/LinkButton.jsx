import { Link } from "react-router-dom";
const LinkButton = ({settings}) => {
    return ( 
        <button className={`${settings.color} border-[1px] rounded py-1 my-2 px-4 text-sm text-zinc-100 drop-shadow-xl`}>
            <Link to={settings.to}>{settings.text}</Link>
          </button>
     );
}
 
export default LinkButton;
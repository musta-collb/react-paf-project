import { Link } from "react-router-dom";
const LinkButton = ({settings}) => {
    const {color, text, to}=settings
    const degree=color.split("-").pop();
    const hover_style="hover:"+color.replace(degree, (parseInt(degree)+200).toString())
    return ( 
        <button className={`${hover_style} ${color} border-[1px] rounded py-1 my-2 px-4 text-sm text-zinc-100 drop-shadow-xl`}>
            <Link to={to}>{text}</Link>
          </button>
     );
}
 
export default LinkButton;
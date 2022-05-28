const SubmitButton = ({settings}) => {
    const {color, text}=settings
    const degree=color.split("-").pop();
    const hover_style="hover:"+color.replace(degree, (parseInt(degree)+100).toString())
    return ( 
        <div className="flex justify-end p-2">
            <button type="submit" className={`p-1 text-white text-sm rounded w-32 my-2  ${hover_style} ${color}`}>{text}</button>
        </div>
     );
}
 
export default SubmitButton;
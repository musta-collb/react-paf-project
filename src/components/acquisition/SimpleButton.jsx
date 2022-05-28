const SimpleButton = ({settings}) => {
    const {color, text, action}=settings
    const degree=color.split("-").pop()
    const hover_style="hover:"+color.replace(degree, (parseInt(degree)+100).toString())
    return ( 
        <div className="flex justify-end p-2">
            <button onClick={action} className={` p-1 text-white  rounded w-32 border-[1px]  py-1  px-4 text-sm my-2 ${hover_style}    ${color}`}>{text}</button>
        </div>
     );
}
 
export default SimpleButton;
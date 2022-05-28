const SubmitButton = ({settings}) => {
    return ( 
        <div className="flex justify-end p-2">
            <button type="submit" className={`p-1 text-white text-sm rounded w-32  ${settings.color}`}>{settings.text}</button>
        </div>
     );
}
 
export default SubmitButton;
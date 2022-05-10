const SimpleButton = ({settings}) => {
    return ( 
        <div className="flex justify-end p-2">
            <button onClick={settings.action} className={`p-1 text-white rounded w-32  ${settings.color}`}>{settings.text}</button>
        </div>
     );
}
 
export default SimpleButton;
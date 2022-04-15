//import useAuth from "../hooks/useAuth";
const Login = () => {
    //const {onLogin}=useAuth();
    const onLogin=()=>{console.log("connected")};
    return ( 
        <div className="w-screen h-screen flex justify-center items-center bg-login-bg">
            <div className="bg-white rounded-lg w-1/3 h-fit flex flex-col p-4 drop-shadow-lg">
                <div className="flex flex-col p-1">
                    <label className="p-1 text-slate-600 font-semibold">Username</label>
                    <input className="text-slate-800 m-1 p-1 border-slate-400 border-1 rounded focus:border-slate-100" type="text"/>
                </div>
                <div className="flex flex-col p-1">
                    <label className="p-1 text-slate-600 font-semibold">Password</label>
                    <input className="text-slate-800 m-1 p-1 border-slate-400 border-1 rounded" type="password"/>
                </div>
                <div className="flex flex-col p-1">
                    <button 
                    onClick={onLogin}
                    className="p-1 m-1 bg-zinc-900 text-slate-100 rounded drop-shadow-1"
                    >Se connecter</button>
                </div>
            </div>
        </div>
     );
}
 
export default Login;
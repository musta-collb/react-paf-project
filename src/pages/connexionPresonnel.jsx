import React from "react";
import { useContext } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth.js";
import AuthContext from "../contexts/JWTAuthContext";



const LoginPersonnel = () => {
  const navigate=useNavigate();
  //Gets user status
  const{login}=useAuth();
  //const{login, user}=useContext(AuthContext);
  

  // NavBar links
  const myLinks = [
    {
      title: "retour",
      destination: "/",
      active: true,
    },
  ];
  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //handle login 
  const onSubmit = async(data) => {
        try{
          console.log("loging in ...")
          const user=await login(data.email, data.password);
          //console.log(AuthContext);
          console.log("done logging", user)
          switch(user.roles[0]){
            case 'ACQUISITION':
              navigate(`/personnel/${user.id}/acquisition`);
              break;
            case 'AFFECTATION':
              navigate(`/personnel/${user.id}/affectation`);
              break;
            case 'RECLAMATION':
              navigate(`/personnel/${user.id}/ticket_reclamation`);
              break;
            case 'REBUT':
              navigate(`/personnel/${user.id}/rebut`);
              break;
            case 'STOCK':
              navigate(`/personnel/${user.id}/stock`);
              break;

            default:
              alert("Vous n'avez accès à rien!")
              break;
          }
          
          console.log("L'utilisateur",user)
        }
        catch(e){
          console.log(e)
        }
  };
  return (
    <>
    <div className="min-h-full mb-0">
      <NavBar links={myLinks} />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="md:w-3/4 mx-auto border sm:w-full p-10">
          <h1 className="text-4xl font-bold font-lora text-center mb-10">
            Inserer votre crédentiels ici!
          </h1>

          {/* form */}
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            <div className="mb-3 md:mx-auto space-y-2 w-full md:w-1/2 font-lora text-base bolder">
              <label className="font-semibold text-gray-600 py-2">
                Email <abbr title="required">*</abbr>
              </label>
              <input
                placeholder="email"
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                type="email"
                id="emaill_personnel"
                {...register("email", {
                  required: "ce champs est requis",
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                })}
              />
              {errors.email && (
                <span className="text-red-700 font-lora text-xs">
                  Email invalide
                </span>
              )}
            </div>

            {/* password */}
            <div className="mb-3 md:mx-auto space-y-2 w-full md:w-1/2 font-lora text-base bolder">
              <label className="font-semibold text-gray-600 py-2">
                mot de passe <abbr title="required">*</abbr>
              </label>
              <input
                placeholder="password"
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                type="password"
                id="password_personnel"
                {...register("password", {
                  required: "ce champs est requis",
                })}
                />
              {errors.password && (
                <span className="text-red-700 font-lora text-xs">
                  Ce champs est requis!
                </span>
              )}
            </div>

            {/* submit */}
            <div className="w-full flex justify-center px-4 my-7">
              <button
                type="submit"
                className="bg-gray-900 text-semibold text-white px-8 py-2 hover:bg-gray-800 rounded"
              >
                Se connecter
              </button>
            </div>
          </form>

          {/* oubli de mot de passe */}
          <div className="w-full mt-6">
            <Link to="/personnel/password">
              <p className="text-center text-xl decoration-solid text-blue-700 hover:text-blue-900">
                Vous avez oublier le mot de passe
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};
export default LoginPersonnel;

import React from "react";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginPersonnel = () => {
  // NavBar links
  const myLinks = [
    {
      title: "Roteur",
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
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
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
            <div class="mb-3 md:mx-auto space-y-2 w-full md:w-1/2 font-lora text-base bolder">
              <label class="font-semibold text-gray-600 py-2">
                Email <abbr title="required">*</abbr>
              </label>
              <input
                placeholder="email"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
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
            <div class="mb-3 md:mx-auto space-y-2 w-full md:w-1/2 font-lora text-base bolder">
              <label class="font-semibold text-gray-600 py-2">
                mot de passe <abbr title="required">*</abbr>
              </label>
              <input
                placeholder="password"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
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
            <div className="w-full flex justify-end px-4 my-7">
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
  );
};
export default LoginPersonnel;
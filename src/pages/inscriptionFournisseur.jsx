import React, { PureComponent } from "react";
import NavBar from "../components/navBar";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { useForm } from "react-hook-form";

const InscriptionFournisseur = () => {
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
            Inserer attentativement votre coordonnées
          </h1>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div class="mb-3 md:mx-auto space-y-2 w-full md:w-1/2  font-lora text-base bolder">
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
            {/* Raison sociale */}
            <div class="mb-3 md:mx-auto space-y-2 w-full md:w-1/2 font-lora text-base bolder">
              <label class="font-semibold text-gray-600 py-2">
                Raison sociale <abbr title="required">*</abbr>
              </label>
              <input
                placeholder="Raison sociale"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                type="text"
                id="raison_sociale"
                {...register("raison", {
                  required: true,
                })}
              />
              {errors.raison && (
                <span className="text-red-700 font-lora text-xs">
                  ce champs est requis
                </span>
              )}
            </div>

            {/* Adresse */}
            <div class="mb-3 md:mx-auto space-y-2 w-full md:w-1/2 font-lora text-base bolder">
              <label class="font-semibold text-gray-600 py-2">
                Adresse <abbr title="required">*</abbr>
              </label>
              <input
                placeholder="adresse"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                type="text"
                id="adresse"
                {...register("adresse", {
                  required: true,
                })}
              />
              {errors.adresse && (
                <span className="text-red-700 font-lora text-xs">
                  ce champs est requis
                </span>
              )}
            </div>
            {/* tel */}
            <div class="mb-3 md:mx-auto space-y-2 w-full md:w-1/2 font-lora text-base bolder">
              <label class="font-semibold text-gray-600 py-2">
                Telephone <abbr title="required">*</abbr>
              </label>
              <input
                placeholder="telephone"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                type="text"
                id="tel"
                {...register("tel", {
                  required: "ce champs est requis",
                  pattern:
                    /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
                })}
              />
              {errors.tel && (
                <span className="text-red-700 font-lora text-xs">
                  le format est incorrect
                </span>
              )}
            </div>

            {/* Pays */}
            <div class="mb-3 md:mx-auto space-y-2 w-full md:w-1/2 font-lora text-base bolder">
              <label class="font-semibold text-gray-600 py-2">
                Pays <abbr title="required">*</abbr>
              </label>
              <input
                placeholder="pays"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                type="text"
                id="pays"
                {...register("pays", {
                  required: "ce champs est requis",
                })}
              />
              {errors.pays && (
                <span className="text-red-700 font-lora text-xs">
                  ce champs est requis
                </span>
              )}
            </div>
            {/* Nb années experience */}
            <div class="mb-3 md:mx-auto space-y-2 w-full md:w-1/2 font-lora text-base bolder">
              <label class="font-semibold text-gray-600 py-2">
                Nombre d'années d'experience <abbr title="required">*</abbr>
              </label>
              <input
                placeholder="années d'experience"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                type="number"
                min="0"
                id="nb_années"
                {...register("nb_annees", {
                  required: "ce champs est requis",
                })}
              />
              {errors.nb_annees && (
                <span className="text-red-700 font-lora text-xs">
                  ce champs est requis
                </span>
              )}
            </div>
            {/* Code postale */}
            <div class="mb-3 md:mx-auto space-y-2 w-full md:w-1/2 font-lora text-base bolder">
              <label class="font-semibold text-gray-600 py-2">
                Code Postale<abbr title="required">*</abbr>
              </label>
              <input
                placeholder="code postale"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                type="text"
                min="0"
                id="code"
                {...register("code", {
                  required: "ce champs est requis",
                  pattern: /^[0-9]{5}/,
                })}
              />
              {errors.code && (
                <span className="text-red-700 font-lora text-xs">
                  code postale est constitué de 5 chiffre!
                </span>
              )}
            </div>

            {/* Envoyer */}
            <div className="w-full flex justify-end px-4 my-7">
              <button
                type="submit"
                className="bg-gray-900 text-semibold text-white px-8 py-2 hover:bg-gray-800 rounded"
              >
                Envoyer
              </button>
            </div>
          </form>
          <div className="w-full mt-6">
            <Link to="/fournisseur/login">
              <p className="text-center text-xl decoration-solid text-blue-700 hover:text-blue-900">
                Vous avez Déjà un compte
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default InscriptionFournisseur;

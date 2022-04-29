import React, { PureComponent } from "react";
import { useForm } from "react-hook-form";

const CreerGarantie = () => {
  // form importation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const articles = [
    {
      id: 12,
      codeBar: "P5433",
    },
  ];
  return (
    <div className="w-full p-4">
      <div className="py-2">
        <h1 className="text-2xl font-gray-900">Nouvelle Garantie:</h1>
      </div>
      <form className="border p-2" onSubmit={handleSubmit(onSubmit)}>
        {/* Main info section */}
        <div class="flex flex-wrap justify-around w-full text-xs">
          {/* refContrat */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Réference contrat: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="contrat"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="text"
              id="nom"
              {...register("refContrat", {
                required: true,
              })}
            />
            {errors.refContrat && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
          {/* date debut */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Date debut: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="date debut"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="date"
              id="nom"
              {...register("dateDebut", {
                required: true,
              })}
            />
            {errors.dateDebut && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
          {/* Durée */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Durée : <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="durée"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="text"
              {...register("duree", {
                required: true,
              })}
            />
            {errors.duree && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore
              </span>
            )}
          </div>
          {/*  */}
          {/* Marché */}
          <div className="w-10/12 m-auto my-2">
            <label class="font-semibold underline text-gray-600 py-2">
              Article : <abbr title="required">*</abbr>
            </label>
            <select
              class="w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg mt-4 "
              {...register("article", {
                required: true,
              })}
            >
              {articles.map((article) => {
                return <option value={article.id}>{article.codeBar}</option>;
              })}
            </select>
            {errors.article && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
        </div>

        <p class="text-xs text-red-500 text-right my-3">
          Les champs ayant le(*) sont obligatiore!
          <abbr title="Required field">*</abbr>
        </p>
        <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
          <button
            type="submit"
            class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded hover:shadow-lg hover:bg-green-500"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreerGarantie;

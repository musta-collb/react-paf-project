import React, { PureComponent } from "react";
import { useForm } from "react-hook-form";

const EditArticle = () => {
  const article = {
    id: 12,
    codeBar: "Y47834837",
    designation: "hp Elitebook 40",
    prixUnitaire: 23.89,
    prixTotale: 30.02,
    description:
      "Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.",
    conditionnement: "12 Unité par pack",
    marque: "hp",
    poids: 12,
    image:
      "https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg",
    dateAquisition: "10/20/2022",
    etat: "Neuf",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: article });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full mx-auto p-2">
      <h1 className="text-4xl font-bold my-1 mb-3">Modifier Article:</h1>
      <form className="border p-2" onSubmit={handleSubmit(onSubmit)}>
        {/* IMAGE */}
        <div class="flex items-center py-6 m-auto">
          <label class="cursor-pointer ">
            <input
              type="file"
              className="focus:outline-none text-white text-sm py-2 px-4 rounded bg-green-400 hover:bg-green-500 hover:shadow-lg"
              accept="accept"
              {...register("image", {
                required: true,
              })}
            />
          </label>
        </div>
        {/* Main info section */}
        <div class="flex flex-wrap justify-around w-full text-xs">
          {/* Disignation */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Designation <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="designation"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="text"
              id="nom"
              {...register("designation", {
                required: true,
              })}
            />
            {errors.designation && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
          {/* Code Bar */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Codebar: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="CodeBar"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="text"
              id="nom"
              {...register("codeBar", {
                required: true,
              })}
            />
            {errors.codeBar && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
          {/* prix unitaier */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Prix unitaire: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="prix"
              step="any"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="number"
              min="0"
              id="nom"
              {...register("prixUnitaire", {
                required: true,
              })}
            />
            {errors.prixUnitaire && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
          {/* prix totale */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Prix totale: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="prix"
              step="any"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="number"
              min="0"
              id="nom"
              {...register("prixTotale", {
                required: true,
              })}
            />
            {errors.prixTotale && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>

          {/* conditionenenmt */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              conditionnement: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="conditionnement"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="text"
              id="nom"
              {...register("conditionnement", {
                required: true,
              })}
            />
            {errors.conditionnement && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
          {/* marque */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              marque: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="marque"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="text"
              id="nom"
              {...register("marque", {
                required: true,
              })}
            />
            {errors.marque && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
          {/* poids */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              poids: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="poids"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="number"
              id=""
              min="0"
              {...register("poids", {
                required: true,
              })}
            />
            {errors.poids && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
          {/* date aqui */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              date Aquisition: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="dateAquisition"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="date"
              id="nom"
              {...register("dateAquisition", {
                required: true,
              })}
            />
            {errors.dateAquisition && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
          {/* etat */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              etat: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="etat"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="text"
              id="nom"
              {...register("etat", {
                required: true,
              })}
            />

            {errors.etat && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore!
              </span>
            )}
          </div>
          {/* description */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-10/12 h-50 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Description: <abbr title="required">*</abbr>
            </label>
            <textarea
              placeholder="description"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="text"
              {...register("description", {
                required: true,
              })}
            ></textarea>
            {errors.description && (
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

export default EditArticle;

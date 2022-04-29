import React, { PureComponent } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const ModifierGenerique = () => {
  const { idCat } = useParams();
  const categorie = {
    id: 12,
    designation: "Hello world",
    quantiteMax: 12,
    quantiteMin: 10,
    quantiteDisponible: 6,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: categorie });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full mx-auto p-2">
      <h1 className="text-4xl font-bold my-1 mb-3">Modifier Categorie:</h1>
      <form className="border p-2" onSubmit={handleSubmit(onSubmit)}>
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
          {/* Qmin */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Quantité Min: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="quantité"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="number"
              min="0"
              {...register("quantiteMin", {
                required: true,
              })}
            />
            {errors.quantiteMin && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore
              </span>
            )}
          </div>
          {/* Qmax */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Quantité Max: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="quantité"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="number"
              min="0"
              {...register("quantiteMax", {
                required: true,
              })}
            />
            {errors.quantiteMax && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore
              </span>
            )}
          </div>
          {/* Qdispo */}
          <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
            <label class="font-semibold text-gray-600 py-2">
              Quantité Disponible: <abbr title="required">*</abbr>
            </label>
            <input
              placeholder="quantité"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="number"
              min="0"
              {...register("quantiteDisponible", {
                required: true,
              })}
            />
            {errors.quantiteDisponible && (
              <span className="text-red-700 font-lora text-xs">
                Champs obligatiore
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
export default ModifierGenerique;

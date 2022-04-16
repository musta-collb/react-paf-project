import React, { PureComponent } from "react";
import NavBar from "../../components/navBar";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditPersonnel = () => {
  // form
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  //   Geting the id of {Pesonnel}
  const { id } = useParams();
  // use data to be fetched
  const user = {
    id: id,
    prenom: "Mustapha",
    nom: "id-yahia",
    email: "mus@gmail.com",
    password: "123ks@glKks",
    roles: ["admin", "user", "rebut"],
    fonction: "Relation fournisseur",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  };
  //debuging purposes
  // console.log(id);
  // links
  const myLinks = [
    {
      title: "Dashboard",
      destination: "/",
      active: true,
    },
    {
      title: "Personels",
      destination: "/admin/u/personnel",
      active: true,
    },
    {
      title: "Produits",
      destination: "/admin/produits",
      active: false,
    },
  ];
  // Handele change select
  console.log(getValues("roles"));
  return (
    <div className="w-full">
      <NavBar links={myLinks} />
      {/* Modify a user */}
      <div className="w-full">
        <div className="md:w-3/4  rounded border m-auto mt-3 p-3">
          <div class="flex flex-col sm:w-full">
            <div class="flex flex-col sm:flex-row items-center">
              <h2 class="font-semibold text-lg mr-auto">
                Modifier l'utilisateur
              </h2>
              <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div class="mt-5">
              {/* form */}
              <form class="form" onSubmit={handleSubmit(onSubmit)}>
                <div class="md:space-y-2 mb-3">
                  {/* Images input */}
                  <div class="flex items-center py-6">
                    <label class="cursor-pointer ">
                      <input
                        type="file"
                        className="focus:outline-none text-white text-sm py-2 px-4 rounded bg-green-400 hover:bg-green-500 hover:shadow-lg"
                        accept="accept"
                      />
                    </label>
                  </div>
                </div>
                {/* Main info section */}
                <div class="flex flex-wrap justify-around w-full text-xs">
                  {/* Nom */}
                  <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
                    <label class="font-semibold text-gray-600 py-2">
                      Nom <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Nom"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      id="nom"
                      value={user.nom}
                      {...register("nom", {
                        required: true,
                      })}
                    />
                    {errors.nom && (
                      <span className="text-red-700 font-lora text-xs">
                        Nom est requis
                      </span>
                    )}
                  </div>
                  {/* Prenom */}
                  <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
                    <label class="font-semibold text-gray-600 py-2">
                      Prenom <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Prenom"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      id="prenom"
                      value={user.prenom}
                      {...register("prenom", {
                        required: true,
                      })}
                    />
                    {errors.prenom && (
                      <span className="text-red-700 font-lora text-xs">
                        prenom est obligatoire
                      </span>
                    )}
                  </div>
                  {/* email */}
                  <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
                    <label class="font-semibold text-gray-600 py-2">
                      Email <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="email"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="email"
                      id="emaill_personnel"
                      value={user.email}
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
                  <div class="mb-3 space-y-2 w-full text-xs md:w-1/3 mx-1">
                    <label class="font-semibold text-gray-600 py-2">
                      Mot de passe <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="password"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="password"
                      id="password"
                      value={user.password}
                      {...register("password", {
                        required: true,
                        pattern:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
                      })}
                    />
                    {errors.password && (
                      <span className="text-red-700 font-lora text-xs">
                        Mot de passe faible
                      </span>
                    )}
                  </div>
                </div>

                <div class="md:space-x-4 w-full text-xs">
                  {/* Fonction */}
                  <div class="md:w-10/12 sm:w-full mx-auto mb-3">
                    <label class="font-semibold text-gray-600 py-2">
                      Fonction
                    </label>
                    <input
                      placeholder="fonction"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      id="fonction"
                      value={user.fonction}
                      {...register("fonction", {
                        required: true,
                      })}
                    />
                    {errors.fonction && (
                      <span className="text-red-700 font-lora text-xs">
                        Ajouter une description pour cet utilisateur
                      </span>
                    )}
                  </div>
                  {/* Roles */}
                  <div class="md:w-10/12 sm:w-full mx-auto">
                    <label class="font-semibold m-2 text-gray-600 py-2">
                      Role<abbr title="required">*</abbr>
                    </label>
                    <div className="w-full">
                      {user.roles.map((item) => {
                        return (
                          <span className="mx-1 rounded-full p-1 text-white bg-red-500">
                            {item}
                          </span>
                        );
                      })}
                    </div>
                    <select
                      class="w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg mt-4 "
                      id="role"
                      multiple
                      onChange={(e) => {
                        console.log("changed");
                      }}
                      {...register("roles", {
                        required: true,
                        onChange: (e) => {
                          console.log(e.target.values);
                        },
                      })}
                    >
                      <option value="admin">Admin</option>
                      <option value="rebut">Responsable rebut</option>
                      <option value="stock">Responsable stock</option>
                      <option value="affectation">
                        Responsable affectation
                      </option>
                      <option value="fournisseur">
                        Responsable fournisseur
                      </option>
                      <option value="utlisateur">utilisateur</option>
                    </select>
                    {errors.roles && (
                      <span className="text-red-700 font-lora text-xs">
                        Ajouter un role!
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
                    Save
                  </button>
                </div>
              </form>

              {/* end form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPersonnel;

import React, { PureComponent } from "react";
import NavBar from "../../components/navBar";
import { useForm } from "react-hook-form";
import Footer from "../../components/footer";

const Dashboard = () => {
  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // To be fetched form the api
  const adminData = {
    id: 12,
    nom: "Mustapha",
    prenom: "id-yahia",
    role: ["Admin", "User"],
    email: "must@gmail.com",
    fonction: "testing",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  };
  // Links
  const myLinks = [
    {
      title: "Personnel",
      destination: "/admin/u/personnel",
      active: true,
    },
    {
      title: "Produits",
      destination: "/admin/u/produit",
      active: false,
    },
  ];
  // Some style
  const zStyle = {
    zIndex: -1,
  };
  return (
    <div className="w-full">
      <NavBar links={myLinks} />
      {/* Main */}
      <main className="flex flex-wrap justify-around">
        {/* profile + stats */}
        <div className="flex flex-col">
          {/* profile card */}
          <div class="card borderw-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
            <img
              class="max-h-20 w-full opacity-80 absolute top-0"
              style={zStyle}
              src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
              alt=""
            />
            <div class="profile w-full flex m-3 ml-4 text-white">
              <img
                class="w-28 h-28 p-1 bg-white rounded-full"
                src={adminData.image}
                alt=""
              />
              <div class="title mt-11 ml-3 font-bold flex flex-col">
                <div class="name break-words">
                  {adminData.nom} {adminData.prenom}
                </div>

                {/* <div class="add font-semibold text-sm italic dark">Model</div> */}
              </div>
            </div>
            <div className="p-3 text-gray-600">
              <span>Roles:</span>
              {adminData.role.map((item) => {
                return (
                  <span className="rounded-full p-1 mr-1 bg-yellow-600 text-xs text-white">
                    {item}
                  </span>
                );
              })}
            </div>
            <div class="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
              <button class="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
                Profile
              </button>
              {/* <div class="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Bio</div> --> */}
            </div>
          </div>
          {/* Stats */}
          <div className="p-4"></div>
        </div>
        {/* créer un nouveaux utilisateur */}
        <div className="w-3/4 rounded border m-2 p-3">
          <div class="flex flex-col sm:w-full">
            <div class="flex flex-col sm:flex-row items-center">
              <h2 class="font-semibold text-lg mr-auto">
                Créer un nouveau utilisateur
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
                        multiple="multiple"
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
                    <label class="font-semibold text-gray-600 py-2">
                      Role<abbr title="required">*</abbr>
                    </label>
                    <select
                      class="w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  "
                      id="role"
                      multiple
                      {...register("roles", {
                        required: true,
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
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

import React, { Component, PureComponent } from "react";
import axios from "axios";

class Login extends Component {
  state = { message: "" };

  handleSubmit(e) {
    e.preventDefault();
    let email = document.getElementById("emial").textContent;
    let password = document.getElementById("password").textContent;
    let credantials = { email: email, password: password };
    const response = axios
      .get("http:8080/localhost/api/v1/cooperatives/", { credantials })
      .then((res) => {
        this.setState({ message: res });
      });
  }

  render() {
    return (
      <div class="h-screen bg-indigo-100 flex justify-center items-center">
        <div class="lg:w-2/5 md:w-1/2 w-2/3">
          <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
              Cooperative connexion
            </h1>

            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="email"
              >
                Email
              </label>
              <input
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="@email"
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="password"
              >
                Password
              </label>
              <input
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="password"
                id="password"
                placeholder="password"
              />
            </div>
            <button
              type="submit"
              class="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans"
              onClick={(e) => this.handleSubmit(e)}
            >
              Login
            </button>
          </form>
          <p class="text-red-600">{this.state.message}</p>
        </div>
      </div>
    );
  }
}
export default Login;

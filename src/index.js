import "flowbite";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
//import AlertTemplate from 'react-alert-template-basic';
const AlertTemplate = ({ style, options, message, close }) => (
  <div style={style} className="flex justify-between space-x-4 bg-white px-4 py-2 shadow-lg rounded border-green-400 border-[1px]">
    <div>
    {options.type === 'info' && '!'}
    {options.type === 'success' && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>}
    {options.type === 'error' && ':('}
    </div>
    <div className="text-gray-600">
    {message}
    </div>
<div className="">
    <button onClick={close}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg></button>
</div>
  </div>
)


// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

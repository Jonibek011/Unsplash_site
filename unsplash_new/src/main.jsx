import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//react toaster
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import next ui
import { NextUIProvider } from "@nextui-org/react";

//context
import { GlobalContextProvider } from "./context/globalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <NextUIProvider>
      <App />
      <ToastContainer position="top-right" />
    </NextUIProvider>
  </GlobalContextProvider>
);

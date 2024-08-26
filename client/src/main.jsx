import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import "./index.css";
import { StateContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(import.meta.env.VITE_THIRDWEB_SECRET_KEY);
console.log(import.meta.env.VITE_THIRDWEB_CLIENT_ID);

root.render(
  <ThirdwebProvider activeChain="sepolia" clientId={`${import.meta.env.VITE_THIRDWEB_CLIENT_ID}`}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);

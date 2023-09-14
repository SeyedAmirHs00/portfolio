import ReactDOM from "react-dom/client";
import React from "react";

import Amir from "./components/amir";
import CandyMenu from "./components/candy-menu";
import Name from "./components/name";

let candyMenuElements = document.getElementsByClassName("candy-menu");
let amirElements = document.getElementsByClassName("amir");

for (let candyMenuElement of candyMenuElements) {
    ReactDOM.createRoot(candyMenuElement).render(
      <React.StrictMode>
        <CandyMenu />
      </React.StrictMode>
    );
}

for (let amirElement of amirElements) {
    ReactDOM.createRoot(amirElement).render(
      <React.StrictMode>
        <Amir />
      </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("amir-name1")).render(
  <React.StrictMode>
    <Amir />
  </React.StrictMode>
);

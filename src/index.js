import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  NUMBER_OFFERS: 3,
};

ReactDOM.render(
    <App offersNumber={Settings.NUMBER_OFFERS} />,
    document.querySelector(`#root`)
);

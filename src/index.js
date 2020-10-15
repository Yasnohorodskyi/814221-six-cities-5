import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";

const Settings = {
  NUMBER_OFFERS: 3,
};

ReactDOM.render(
    <App offersNumber={Settings.NUMBER_OFFERS} offers={offers} />,
    document.querySelector(`#root`)
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import thunk from "redux-thunk";
import {createAPI} from "../src/services/api";
import {fetchOffers} from "./store/api-actions";

const api = createAPI();
const Settings = {
  NUMBER_OFFERS: 3,
};

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);
Promise.all([store.dispatch(fetchOffers())]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App offersNumber={Settings.NUMBER_OFFERS} />,
      </Provider>,
      document.querySelector(`#root`)
  );
});

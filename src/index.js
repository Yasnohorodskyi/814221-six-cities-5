import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "../src/services/api";
import {fetchOffers} from "./store/api-actions";
import rootReducer from "./store/reducers/root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI();
const Settings = {
  NUMBER_OFFERS: 3,
};

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);
Promise.all([store.dispatch(fetchOffers())]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App offersNumber={Settings.NUMBER_OFFERS} />,
      </Provider>,
      document.querySelector(`#root`)
  );
});

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "../src/services/api";
import {checkAuth, fetchOffers} from "./store/api-actions";
import rootReducer from "./store/reducers/root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI();
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);
Promise.all([store.dispatch(fetchOffers()), store.dispatch(checkAuth())]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />,
      </Provider>,
      document.querySelector(`#root`)
  );
});

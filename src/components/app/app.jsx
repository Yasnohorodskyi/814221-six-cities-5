import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import SignIn from "../sign-in/sign-in";
import {connect} from "react-redux";
import {adaptOffer} from "../../utils/common";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = ({offersNumber, offersAll}) => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main offersNumber={offersNumber} offers={offersAll} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={`/favorites`}
          render={() => {
            return <Favorites offers={offersAll} />;
          }}
        ></PrivateRoute>
        <Route
          exact
          path="/offer/:id"
          render={({match}) => {
            return (
              <Room
                offer={adaptOffer(
                    offersAll.find(
                        (offer) => offer.id === Number(match.params.id)
                    )
                )}
              />
            );
          }}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersNumber: PropTypes.number,
  offersAll: PropTypes.array,
};

const mapStateToProps = ({DATA}) => ({
  offersAll: DATA.offersAll,
});

export default connect(mapStateToProps)(App);

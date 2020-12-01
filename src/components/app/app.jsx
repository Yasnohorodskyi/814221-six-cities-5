import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import SignIn from "../sign-in/sign-in";
import {connect} from "react-redux";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = ({offersAll, favoriteOffers}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main offers={offersAll} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={`/favorites`}
          render={() => {
            return <Favorites offers={favoriteOffers} />;
          }}
        ></PrivateRoute>
        <Route
          exact
          path="/offer/:id"
          render={({match}) => {
            return (
              <Room
                offer={
                  offersAll.find(
                      (offer) => offer.id === Number(match.params.id)
                  )
                }
              />
            );
          }}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersAll: PropTypes.array,
  favoriteOffers: PropTypes.array,
};

const mapStateToProps = (state) => ({
  offersAll: state.DATA.offersAll,
  favoriteOffers: state.DATA.favoriteOffers,
});

export default connect(mapStateToProps)(App);

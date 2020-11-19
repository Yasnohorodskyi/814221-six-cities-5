import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import SignIn from "../sign-in/sign-in";
import {connect} from "react-redux";
import {adaptOffer} from "../../utils/common";

const App = ({offersNumber, offersAll}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offersNumber={offersNumber} offers={offersAll} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offersAll} />
        </Route>
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

const mapStateToProps = (state) => ({
  offersAll: state.offersAll,
});

export default connect(mapStateToProps)(App);

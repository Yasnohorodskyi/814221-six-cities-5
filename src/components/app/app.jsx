import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import SignIn from "../sign-in/sign-in";

const App = ({offersNumber, offers}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offersNumber={offersNumber} offers={offers} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers} />
        </Route>
        <Route
          exact
          path="/offer/:id"
          render={({match}) => {
            return (
              <Room
                offer={offers.find((offer) => offer.id === Number(match.params.id))}
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
  offers: PropTypes.array.isRequired,
};

export default App;


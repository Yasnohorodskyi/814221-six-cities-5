import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import SignIn from "../sign-in/sign-in";

const App = (props) => {
  const {offersNumber} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offersNumber={offersNumber} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersNumber: PropTypes.number.isRequired,
};

export default App;

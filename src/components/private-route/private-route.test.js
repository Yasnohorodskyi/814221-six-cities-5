import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import {AuthorizationCodes} from "../../const";
import {BrowserRouter as Router} from "react-router-dom";
const noop = () => {};
describe(`PrivateRoute /> render`, () => {
  it(`renders correctly with authorizationStatus = AUTH`, () => {
    const privateRouteComponent = renderer
      .create(
          <Router>
            <PrivateRoute
              exact={true}
              render={noop}
              authorizationStatus={AuthorizationCodes.AUTH}
              path={`/`}
            />
          </Router>
      )
      .toJSON();

    expect(privateRouteComponent).toMatchSnapshot();
  });

  it(`renders correctly with authorizationStatus = NO_AUTH`, () => {
    const privateRouteComponent = renderer
      .create(
          <Router>
            <PrivateRoute
              exact={true}
              render={noop}
              authorizationStatus={AuthorizationCodes.NO_AUTH}
              path={`/`}
            />
          </Router>
      )
      .toJSON();

    expect(privateRouteComponent).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "../sign-in/sign-in";
import {BrowserRouter as Router} from "react-router-dom";

const noop = () => {};

describe(`<SignIn/> render`, () => {
  it(`renders correctly with full information`, () => {
    const signInComponent = renderer
      .create(
          <Router>
            <SignIn onSubmit={noop} />
          </Router>)
      .toJSON();

    expect(signInComponent).toMatchSnapshot();
  });
});

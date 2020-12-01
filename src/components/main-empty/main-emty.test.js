import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "../main-empty/main-empty";

describe(`<MainEmpty /> render`, () => {
  it(`renders correctly with full information`, () => {
    const mainEmptyComponent = renderer
      .create(<MainEmpty />)
      .toJSON();

    expect(mainEmptyComponent).toMatchSnapshot();
  });
});

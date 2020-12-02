import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "../main-empty/main-empty";

const city = `Paris`;
describe(`<MainEmpty /> render`, () => {
  it(`renders correctly with full information`, () => {
    const mainEmptyComponent = renderer
      .create(<MainEmpty city={city}/>)
      .toJSON();

    expect(mainEmptyComponent).toMatchSnapshot();
  });
});

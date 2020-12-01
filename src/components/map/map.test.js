import React from "react";
import renderer from "react-test-renderer";
import Map from "../map/map";
import {offers} from "../test-mocks/offers-mocks";

describe(`<Map /> render`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);
  it(`renders correctly with full information`, () => {
    const mapComponent = renderer
      .create(<Map offers={offers} activeItem={5} />)
      .toJSON();

    expect(mapComponent).toMatchSnapshot();
  });
});

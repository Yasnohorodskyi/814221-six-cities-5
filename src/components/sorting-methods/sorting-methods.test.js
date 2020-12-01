import React from "react";
import renderer from "react-test-renderer";
import {SortingMethods} from "../sorting-methods/sorting-methods";

const noop = () => {};
const sortTypes = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`,
];

describe(`<SortingMethods/> render`, () => {
  it(`renders correctly with full information`, () => {
    const sortingMethodsComponent = renderer
      .create(<SortingMethods changeSortType={noop} sortType={sortTypes[0]} />)
      .toJSON();

    expect(sortingMethodsComponent).toMatchSnapshot();
  });
});

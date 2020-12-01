import React from "react";
import renderer from "react-test-renderer";
import FavoriteEmpty from "../favorite-empty/favorite-empty";

describe(`<FavoriteEmpty /> render`, () => {
  it(`renders correctly with full information`, () => {
    const favoriteEmptyComponent = renderer
      .create(<FavoriteEmpty />)
      .toJSON();

    expect(favoriteEmptyComponent).toMatchSnapshot();
  });
});

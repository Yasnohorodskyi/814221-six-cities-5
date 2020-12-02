import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import {offersCity} from "../test-mocks/offers-mocks";
import {AuthorizationCodes} from "../../const";
import {Main} from "../main/main";

const renderer = new ShallowRenderer();

describe(`<Main /> render`, () => {
  it(`renders correctly with statusAthoridation = AUTH`, () => {
    renderer.render(
        <Main
          authorizationStatus={AuthorizationCodes.AUTH}
          offersCity={offersCity}
        />
    );

    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it(`renders correctly with statusAthoridation = NO_AUTH`, () => {
    renderer.render(
        <Main
          authorizationStatus={AuthorizationCodes.NO_AUTH}
          offersCity={offersCity}
        />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});

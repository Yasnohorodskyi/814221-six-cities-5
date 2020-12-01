import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "../reviews-list/reviews-list";
import {reviews} from "../test-mocks/review-mocks";

describe(`<ReviewsList/> render`, () => {
  it(`renders correctly with full information`, () => {
    const reviewComponent = renderer
      .create(<ReviewsList reviews={reviews} />)
      .toJSON();

    expect(reviewComponent).toMatchSnapshot();
  });
});

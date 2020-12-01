import React from "react";
import renderer from "react-test-renderer";
import Review from "../review/review";
import {review} from "../test-mocks/review-mocks";

describe(`<Review /> render`, () => {
  it(`renders correctly with full information`, () => {
    const reviewComponent = renderer
      .create(<Review review={review} />)
      .toJSON();

    expect(reviewComponent).toMatchSnapshot();
  });
});

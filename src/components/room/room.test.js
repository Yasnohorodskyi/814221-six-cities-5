import React from "react";
import renderer from "react-test-renderer";
import {Room} from "../room/room";
import {reviews} from "../test-mocks/review-mocks";
import {offers} from "../test-mocks/offers-mocks";

const noop = () => {};

describe(`<Room /> render`, () => {
  it(`renders correctly with full information`, () => {
    const roomComponent = renderer
      .create(
          <Room
            offer={offers[0]}
            fetchCommentsByOffer={noop}
            commentsByOffer={reviews}
          />
      )
      .toJSON();

    expect(roomComponent).toMatchSnapshot();
  });
});

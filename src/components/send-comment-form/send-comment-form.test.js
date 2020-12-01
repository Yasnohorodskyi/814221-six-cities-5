import React from "react";
import renderer from "react-test-renderer";
import SendCommentForm from "../send-comment-form/send-comment-form";

const noop = () => {};

describe(`<SendCommentForm/> render`, () => {
  it(`renders correctly with full information`, () => {
    const sendCommentFormComponent = renderer
      .create(<SendCommentForm handleFieldChange={noop} handleSubmit={noop} />)
      .toJSON();

    expect(sendCommentFormComponent).toMatchSnapshot();
  });
});

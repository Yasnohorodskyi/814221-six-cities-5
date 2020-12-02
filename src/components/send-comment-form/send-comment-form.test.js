import React from "react";
import renderer from "react-test-renderer";
import SendCommentForm from "../send-comment-form/send-comment-form";

const noop = () => {};
const formComment = ``;
const formRating = ``;
const isSending = false;

describe(`<SendCommentForm/> render`, () => {
  it(`renders correctly with full information`, () => {
    const sendCommentFormComponent = renderer
      .create(<SendCommentForm handleFieldChange={noop} handleSubmit={noop} formComment = {formComment} formRating = {formRating} isSending = {isSending} />)
      .toJSON();

    expect(sendCommentFormComponent).toMatchSnapshot();
  });
});

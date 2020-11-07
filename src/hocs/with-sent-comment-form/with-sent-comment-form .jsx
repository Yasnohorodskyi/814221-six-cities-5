import React, {PureComponent} from "react";
const withSentCommentForm = (Component) => {
  class WithSentCommentForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        review: ``,
        rating: ``,
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }
    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component handleSubmit = {this.handleSubmit} handleFieldChange = {this.handleFieldChange} ></Component>
      );
    }
  }
  return WithSentCommentForm;
};

export default withSentCommentForm;

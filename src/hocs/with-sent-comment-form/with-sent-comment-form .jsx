import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchCommentsByOffer, sendComment} from "../../store/api-actions";
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
      this.props.onSubmit({
        comment: this.state.review,
        rating: this.state.rating,
        id: this.props.id
      });
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

  WithSentCommentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };
  const mapDispatchToProps = (dispatch) => ({
    onSubmit(authData) {
      dispatch(sendComment(authData));
      dispatch(fetchCommentsByOffer(authData.id));
    }
  });
  const commentForm = connect(null, mapDispatchToProps)(WithSentCommentForm);
  return commentForm;
};

export default withSentCommentForm;


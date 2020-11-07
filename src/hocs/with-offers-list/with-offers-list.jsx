import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withOffersList = (Component) => {
  class WithOffersList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeCard: 0,
      };
      this.onCardHover = this.onCardHover.bind(this);
    }

    onCardHover(id) {
      const offers = this.props.offers;
      const currentOffer = offers.find((off) => {
        return off.id === id;
      });
      this.setState({
        activeCard: currentOffer,
      });
    }
    render() {
      return (
        <Component {...this.props} onCardHover={this.onCardHover}></Component>
      );
    }
  }

  WithOffersList.propTypes = {
    offers: PropTypes.array.isRequired,
  };
  return WithOffersList;
};

export default withOffersList;

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const withOffersList = (Component) => {
  const WithOffersList = (props) => {
    const onCardHover = (id) => {
      const offers = props.offers;
      const currentOffer = offers.find((off) => {
        return off.id === id;
      });
      props.setActiveCard(currentOffer);
    };

    return <Component {...props} onCardHover={onCardHover}></Component>;
  };

  WithOffersList.propTypes = {
    offers: PropTypes.array.isRequired,
    setActiveCard: PropTypes.func.isRequired,
  };
  const mapStateToProps = ({STATE}) => ({
    activeCard: STATE.activeCard,
  });
  const mapDispatchToProps = (dispatch) => ({
    setActiveCard(activeCard) {
      dispatch(ActionCreator.setActiveCard(activeCard));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithOffersList);
};

export default withOffersList;

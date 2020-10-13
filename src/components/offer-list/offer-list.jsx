import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardOffer from "../card-offer/card-offer";

export default class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: 0,
    };
  }

  render() {
    const {offers} = this.props;
    const {styleCardClass} = this.props;
    const {styleImgClass} = this.props;
    const {styleInfoClass} = this.props;
    const offersList = offers.map((offer) => {
      return (
        <CardOffer
          id={offer.id}
          key={offer.id}
          offer={offer}
          styleCardClass={styleCardClass}
          styleImgClass={styleImgClass}
          styleInfoClass = {styleInfoClass}
          onHover={() => {
            const currentOffer = offers.find(function (off) {
              return off.id === offer.id;
            });
            this.setState({
              activeCard: currentOffer,
            });
          }}
        />
      );
    });
    return (
      <div className="cities__places-list places__list tabs__content">
        {offersList}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  styleCardClass: PropTypes.string.isRequired,
  styleImgClass: PropTypes.string.isRequired,
  styleInfoClass: PropTypes.string,
};

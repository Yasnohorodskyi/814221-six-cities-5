import React from "react";
import PropTypes from "prop-types";
import CardOffer from "../card-offer/card-offer";
import {adaptOffer} from "../../utils/common";

const OffersList = ({
  offers,
  styleCardClass,
  styleImgClass,
  styleInfoClass,
  onCardHover,
  numberOfOffers,
}) => {
  offers = numberOfOffers ? offers.slice(0, numberOfOffers) : offers;
  const offersList = offers.map((offer) => {
    const adOffer = adaptOffer(offer);
    return (
      <CardOffer
        id={adOffer.id}
        key={adOffer.id}
        offer={adOffer}
        styleCardClass={styleCardClass}
        styleImgClass={styleImgClass}
        styleInfoClass={styleInfoClass}
        onHover={(e) => onCardHover(adOffer.id, e)}
      />
    );
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  styleCardClass: PropTypes.string.isRequired,
  styleImgClass: PropTypes.string.isRequired,
  styleInfoClass: PropTypes.string,
  numberOfOffers: PropTypes.number,
  onCardHover: PropTypes.func.isRequired,
};

export default OffersList;

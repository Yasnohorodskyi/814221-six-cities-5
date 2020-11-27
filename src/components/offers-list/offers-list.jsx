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
  widthImg,
  heightImg,
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
        widthImg={widthImg}
        heightImg={heightImg}
        onHover={(e) => onCardHover(adOffer.id, e)}
      />
    );
  });

  return <React.Fragment>{offersList}</React.Fragment>;
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

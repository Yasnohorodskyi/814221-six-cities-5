import React from "react";
import PropTypes from "prop-types";
import CardOffer from "../card-offer/card-offer";

const OffersList = ({
  offers,
  styleCardClass,
  styleImgClass,
  styleInfoClass,
  onCardHover,
  widthImg,
  heightImg,
}) => {
  const offersList = offers.map((offer) => {

    return (
      <CardOffer
        id={offer.id}
        key={offer.id}
        offer={offer}
        styleCardClass={styleCardClass}
        styleImgClass={styleImgClass}
        styleInfoClass={styleInfoClass}
        widthImg={widthImg}
        heightImg={heightImg}
        onHover={(e) => onCardHover(offer.id, e)}
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
  onCardHover: PropTypes.func.isRequired,
};

export default OffersList;

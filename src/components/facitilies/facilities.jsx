import React from "react";
import PropTypes from "prop-types";

const Facilities = (props) => {
  const {facilities} = props;
  const facilitiesItems = facilities.map((item, index) => (
    <li className="property__inside-item" key={index}>{item}</li>
  ));

  return <ul className="property__inside-list">{facilitiesItems}</ul>;
};

Facilities.propTypes = {
  facilities: PropTypes.array.isRequired,
};
export default Facilities;

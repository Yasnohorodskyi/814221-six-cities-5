import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {connect} from "react-redux";
const SortingMethods = ({onTabClick, sortType}) => {
  const sortTypes = [
    `Popular`,
    `Price: low to high`,
    `Price: high to low`,
    `Top rated first`,
  ];
  const getSortNames = () => {
    return sortTypes.map((name, index) => {
      return (
        <li
          key={index}
          className={cn(`places__option`, {
            "places__option--active": sortType === name,
          })}
          tabIndex="0"
          onClick={onTabClick}
        >
          {name}
        </li>
      );
    });
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {getSortNames()}
      </ul>
    </form>
  );
};

SortingMethods.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  sortType: state.sortType,

});

export default connect(mapStateToProps)(SortingMethods);

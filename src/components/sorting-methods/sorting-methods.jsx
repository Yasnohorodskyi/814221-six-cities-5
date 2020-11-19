import React, {useState} from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const SortingMethods = ({changeSortType, sortType}) => {
  const [opened, setOpened] = useState(true);

  const sortTypes = [
    `Popular`,
    `Price: low to high`,
    `Price: high to low`,
    `Top rated first`,
  ];
  const onTabClick = (evt) => {

    const sort = evt.target.textContent.toString();
    changeSortType(sort);
    setOpened(false);

  };
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
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => {
          setOpened(!opened);
        }}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn(`places__options places__options--custom`, {
          "places__options--opened": opened === true,
        })}
      >
        {getSortNames()}
      </ul>
    </form>
  );
};

SortingMethods.propTypes = {
  changeSortType: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({

  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SortingMethods);

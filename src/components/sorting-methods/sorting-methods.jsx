import React from "react";
import {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import filterOffersBySort from "../../store/selectors/filter-offers-by-sort";

class SortingMethods extends PureComponent {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(evt) {
    const {changeSortType} = this.props;
    const sort = evt.target.textContent.toString();
    changeSortType(sort);
  }
  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">
            Popular
          </li>
          <li className="places__option" tabIndex="0" onClick={this._onClick}>
            Price: low to high
          </li>
          <li className="places__option" tabIndex="0" onClick={this._onClick}>
            Price: high to low
          </li>
          <li className="places__option" tabIndex="0" onClick={this._onClick}>
            Top rated first
          </li>
        </ul>
      </form>
    );
  }
}

const mapStatetoProps = (state) => ({
  sortType: state.sortType,
  offers: filterOffersBySort(state, state.sortType),
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});

SortingMethods.propTypes = {
  changeSortType: PropTypes.func.isRequired,
};
export {SortingMethods};
export default connect(mapStatetoProps, mapDispatchToProps)(SortingMethods);

import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = (props) => {
  const {offersNumber} = props;
  return <Main offersNumber={offersNumber} />;
};

App.propTypes = {
  offersNumber: PropTypes.number.isRequired,
};

export default App;

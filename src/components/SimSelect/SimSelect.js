import React from "react";
import PropTypes from "prop-types";
import "../reset.scss";
import "./styles.scss";

const SimSelect = props => {
  const { children, placeholder, names } = props;
  return (
    <div className="selectdiv">
      <select>
        <option selected  disabled hidden>{children || placeholder || `Mr T sez Select Fool!`} </option>
        {names.map((name, i) => (
          <option key={i} value={name} >
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

SimSelect.propTypes = {
  placeholder: PropTypes.string,
  names: PropTypes.array
};

export default SimSelect;

import React from "react";
import PropTypes from "prop-types";

const Option = ({ to, children }) => (
    <a className="dropdown-item" href={to}>
        {children}
    </a>
);

Option.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Option;

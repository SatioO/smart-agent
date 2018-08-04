import React from "react";
import PropTypes from "prop-types";

const Item = ({ to, children }) => (
    <li className="nav-item">
        <a className="nav-item nav-link" href={to}>
            {children}
        </a>
    </li>
);

Item.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Item;

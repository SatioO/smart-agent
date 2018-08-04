import React from "react";
import PropTypes from "prop-types";

const Item = ({ to, children }) => (
    <li className="breadcrumb-item">
        <a href={to}>{children}</a>
    </li>
);

Item.PropTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Item;

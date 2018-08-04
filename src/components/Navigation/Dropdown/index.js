import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ title, children }) => (
    <li className="nav-item dropdown">
        <a
            className="nav-link dropdown-toggle"
            href=""
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
            {title}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {children}
        </ul>
    </li>
);

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Dropdown;

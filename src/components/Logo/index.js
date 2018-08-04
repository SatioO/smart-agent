import React from "react";
import PropTypes from "prop-types";

const Logo = ({ src }) => (
    <div className="logo_wrap">
        <a className="navbar-brand" href="">
            <img src={src} alt="logo" />
        </a>
    </div>
);

Logo.propTypes = {
    src: PropTypes.string.isRequired
};

export default Logo;

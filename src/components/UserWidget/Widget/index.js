import React from "react";
import PropTypes from "prop-types";

const UserWidget = ({ name, avatar, children }) => (
    <div className="user_wrap d-flex justify-content-end">
        <div className="dropdown">
            <div className="dropdown-toggle" data-toggle="dropdown">
                <div className="user_inner">
                    <img src={avatar} alt="" />
                    <span>{name}</span>
                </div>
                <div className="icon_down">
                    <i className="fa fa-chevron-down" />
                </div>
            </div>
            <div className="dropdown-menu">{children}</div>
        </div>
    </div>
);

UserWidget.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default UserWidget;

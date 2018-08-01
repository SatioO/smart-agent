import React from "react";

export const Image = props => (
    <img
        style={{ width: props.width, height: props.height }}
        src={props.path}
        alt={props.path}
    />
);

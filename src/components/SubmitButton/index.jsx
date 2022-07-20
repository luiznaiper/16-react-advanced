import React from "react";
import { Button } from "./styles";
import propTypes from "prop-types";

const SubmitButton = ({ children, disabled, onClick }) => {
    return (
        <Button disabled={disabled} onClick={onClick}>
            {children}
        </Button>
    );
};

SubmitButton.propTypes = {
    disabled: propTypes.bool,
    onClick: propTypes.func,
    children: propTypes.node.isRequired,
};

export { SubmitButton };

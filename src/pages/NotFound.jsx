import React from "react";
import { Title } from "../components/UserForm/styles";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <Title>
                404... NotFound <Link to="/">GO HOME</Link>
            </Title>
        </>
    );
};

export { NotFound };

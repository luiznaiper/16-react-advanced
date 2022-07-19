import React, { useContext } from "react";
import { AppContext } from "../Context";
import { SubmitButton } from "../components/SubmitButton";
import { Title } from "../components/UserForm/styles";

const User = () => {
    const { removeAuth } = useContext(AppContext);
    return (
        <>
            <Title>User</Title>
            <SubmitButton onClick={removeAuth}>Log out</SubmitButton>
        </>
    );
};

export { User };

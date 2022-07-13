import React, { useContext } from "react";
import { AppContext } from "../Context";
import { UserForm } from "../components/UserForm";

const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext);
    return (
        <>
            <UserForm title="Sign up" onSubmit={activateAuth} />
            <UserForm title="Sign in" onSubmit={activateAuth} />
        </>
    );
};

export { NotRegisteredUser };

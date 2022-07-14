import React, { useContext } from "react";
import { AppContext } from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../containers/RegisterMutation";

const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext);

    return (
        <>
            <RegisterMutation>
                {(register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password };
                        const variables = { input };
                        register({ variables }).then(activateAuth);
                    };
                    const errorMsg = error && "User already exists.";
                    return (
                        <UserForm
                            error={errorMsg}
                            disabled={loading}
                            onSubmit={onSubmit}
                            title="Sign Up"
                        />
                    );
                }}
            </RegisterMutation>
            <UserForm onSubmit={activateAuth} title="Log in" />
        </>
    );
};

export { NotRegisteredUser };

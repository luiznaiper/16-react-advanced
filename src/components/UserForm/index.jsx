import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title, Error } from "./styles";

const UserForm = ({ onSubmit, title, error, disabled }) => {
    const email = useInputValue("");
    const password = useInputValue("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email: email.value, password: password.value });
    };

    return (
        <>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder="email" {...email} />
                <Input
                    disabled={disabled}
                    type="password"
                    placeholder="password"
                    {...password}
                />
                <Button disabled={disabled}>{title}</Button>
            </Form>
            {error && <Error>{error}</Error>}
        </>
    );
};

export { UserForm };

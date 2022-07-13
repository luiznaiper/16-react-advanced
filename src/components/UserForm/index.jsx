import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button, Title } from "./styles";

const UserForm = ({ activateAuth, title }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        activateAuth();
    };

    return (
        <>
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    placeholder="User"
                    {...register("email", { required: true })}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.emailRequired && <span>This filed is required</span>}
                <Button type="submit">{title}</Button>
            </Form>
        </>
    );
};

export { UserForm };

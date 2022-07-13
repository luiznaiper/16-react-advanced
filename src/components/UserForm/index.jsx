import React from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ activateAuth }) => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="User"
                {...register("email", { required: true })}
            />
            <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
            />
            {errors.emailRequired && <span>This filed is required</span>}
            <input type="submit" />
        </form>
    );
};

export { UserForm };

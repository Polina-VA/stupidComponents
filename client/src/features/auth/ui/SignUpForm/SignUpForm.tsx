import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ROUTES } from "@/app/router/routes";
import { useNavigate } from "react-router-dom";
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from "@/shared/hooks/reduxHooks";
import { signUp } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";

type SignUpFormProps = {};

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required("name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

export const SignUpForm: React.FC<SignUpFormProps> = ({}) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectUserLoading);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInputs> = async ({
    name,
    email,
    password,
  }) => {
    try {
      const resultAction = await dispatch(signUp({ name, email, password }));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusIcon = (fieldName: keyof IFormInputs) => {
    if (errors[fieldName]) {
      return <span>🔴</span>;
    }
    if (getValues()[fieldName] && !errors[fieldName]) {
      return <span>✅</span>;
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>* name</label>
          <div>
            <input placeholder="Enter your name" {...register("name")} />
            {getStatusIcon("name")}
          </div>
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>* email</label>
          <div>
            <input placeholder="Enter your email" {...register("email")} />
            {getStatusIcon("email")}
          </div>
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>* password</label>
          <div>
            <input
              placeholder="Enter your password"
              type="password"
              {...register("password")}
            />
            {getStatusIcon("password")}
          </div>
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" disabled={!isValid || loading}>
          {loading ? "Signing Up..." : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

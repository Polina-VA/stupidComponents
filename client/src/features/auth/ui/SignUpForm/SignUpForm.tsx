import React from "react";
import type { FormProps } from "antd";
import { Button, Card, Flex, Form, Input } from "antd";
import { ROUTES } from "@/app/router/routes";
import { useNavigate } from "react-router-dom";
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from "@/shared/hooks/reduxHooks";
import { signUp } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";
import './SignUpForm.module.css'
import { createPointsThunk } from "@/entities/points";

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectUserLoading);
  const navigate = useNavigate();


  const onFinish: FormProps<SignUpFormData>["onFinish"] = async (
    values: SignUpFormData
  ) => {
    try {
      const resultAction = await dispatch(signUp(values));
      console.log(resultAction);
      unwrapResult(resultAction);
      dispatch(createPointsThunk())
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  return (
    <Flex
    style={{ width: "100%", marginTop: "100px" }}
      gap={"middle"}
      justify="center"
      align="center"
    >
      <Card style={{ width: 500 }}>
        <h1>Регистрация</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 500 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<SignUpFormData>
            label="Имя"
            name="name"
            hasFeedback
            validateDebounce={500}
            rules={[{ required: true, message: "Необходимо ввести имя!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<SignUpFormData>
            label="Email"
            name="email"
            hasFeedback
            validateDebounce={500}
            rules={[
              { required: true, message: "Необходимо ввести email!" },
              { type: "email", message: "Введен некорректный email!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<SignUpFormData>
            label="Пароль"
            name="password"
            hasFeedback
            validateDebounce={500}
            rules={[{ required: true, message: "Необходимо ввести пароль!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<SignUpFormData>
            label="Повторите пароль"
            name="confirmPassword"
            hasFeedback
            validateDebounce={500}
            rules={[
              { required: true, message: "Необходимо повторить пароль!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Пароли не совпадают!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button  type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};

export default SignUpForm;

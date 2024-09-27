import React from "react";
import type { FormProps } from "antd";
import { Button, Card, Flex, Form, Input } from "antd";
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from "@/shared/hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { signIn } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";
import { ROUTES } from "@/app/router/routes";
import "./SignInForm.module.css";

type SignInFormData = {
  email: string;
  password: string;
};

export const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(selectUserLoading);

  const onFinish: FormProps<SignInFormData>["onFinish"] = async (
    values: SignInFormData
  ) => {
    try {
      const resultAction = await dispatch(signIn(values));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Sign in failed:", error);
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
        <h1>Авторизация</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 500 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<SignInFormData>
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

          <Form.Item<SignInFormData>
            label="Пароль"
            name="password"
            hasFeedback
            validateDebounce={500}
            rules={[{ required: true, message: "Необходимо ввести пароль!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ }}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};

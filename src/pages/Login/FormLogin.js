import React from "react";
import styled from "styled-components";
import Button from "../../componets/common/button/Button";
import Input from "../../componets/common/form/input/Input";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaLogin from "./Schema";

const FormStyled = styled.form`
  padding-bottom: 130px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  .ant-btn {
    max-width: 400px;
    width: 100%;
    margin-bottom: 100px;
    font-size: 25px;
    font-weight: 700;
  }
  .ant-input {
    padding-left: 70px;
  }
`;

const FormLogin = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schemaLogin),
    mode: `all`,
  });
  const handleSubmit = (values) => {
    console.log("Form", values);
  };
  return (
    <FormProvider {...methods}>
      <FormStyled>
        <Input
          labelname="メールアドレス"
          name="email"
          icon={<img src="/iconEmail.png" alt="" />}
        />
        <Input
          labelname="パスワード"
          name="password"
          type="password"
          icon={<img src="/iconPassword.png" alt="" />}
        />
        <Button
          className="ant-btn-primary"
          onClick={methods.handleSubmit(handleSubmit)}
        >
          ログイン
        </Button>
      </FormStyled>
    </FormProvider>
  );
};

export default FormLogin;

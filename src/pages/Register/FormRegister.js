import React from "react";
import Input from "../../componets/common/form/input/Input";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import Button from "../../componets/common/button/Button";
import Radio from "../../componets/common/form/radio/Radio";
import Checkbox from "../../componets/common/form/checkbox/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaRegister from "./SchemaRegister";

const FormStyled = styled.form`
  padding-bottom: 130px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;

  .ant-btn {
    max-width: 400px;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
  }
  .ant-radio-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .ant-radio-wrapper span:nth-child(2) {
    font-size: 18px;
  }

  .register-checkbox {
    margin-top: 10px;
  }
`;
const HalfFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35px;
`;
const FormRegister = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      nickName: "",
      gender: "",
      province: "",
      dob: "",
      lastName: "",
      firstName: "",
      phone: "",
      terms: "",
    },
    resolver: yupResolver(SchemaRegister),
    mode: `all`,
  });
  const handleSubmit = (values) => {
    console.log("Form", values);
  };
  return (
    <FormProvider {...methods}>
      <FormStyled>
        <Input labelname="メールアドレス" name="email" />
        <Input
          labelname="パスワード（半角英数８桁以上）"
          name="password"
          type="password"
        />
        <Input
          labelname="パスワード再確認"
          name="confirmPassword"
          type="password"
        />
        <Input labelname="ニックネーム" name="nickName" />
        <Radio
          options={[
            { label: "男性", value: "male" },
            { label: "女性", value: "female" },
            { label: "その他", value: "other" },
          ]}
          name="gender"
          defaultValue="male"
        />
        <Input labelname="都道府県を選んでください" name="province" />
        <Input
          labelname="生年月日（年代のみ公開されます）"
          placeholder="例: 2000/01/01"
          name="dob"
        />
        <HalfFormGroup>
          <Input labelName="姓 (非公開)" name="lastName" />
          <Input labelName="名 (非公開)" name="firstName" />
        </HalfFormGroup>
        <Input labelName="(任意）友達紹介コード" name="phone" />
        <Checkbox
          className="register-checkbox"
          name="terms"
          question="利用規約 と プライバシーポリシー"
        />

        <Button
          className="ant-btn-primary"
          onClick={methods.handleSubmit(handleSubmit)}
        >
          同意して登録（無料）
        </Button>
      </FormStyled>
    </FormProvider>
  );
};

export default FormRegister;

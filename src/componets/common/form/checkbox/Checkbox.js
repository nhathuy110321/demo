import React from "react";
import { Checkbox as BaseCheckbox, Form } from "antd";
import { Controller, useController, useFormContext } from "react-hook-form";
import styled from "styled-components";

const CheckboxStyled = styled(BaseCheckbox)`
  &:hover {
    .ant-checkbox-inner {
      border-color: ${({ theme }) => theme.primary} !important;
    }
  }
  .ant-checkbox + span {
    padding-inline-start: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: calc(24 / 18);
    color: ${({ theme }) => theme.primary};
  }
  .ant-checkbox-inner {
    width: 22px;
    height: 22px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.primary} !important;
    background-color: ${({ theme }) => theme.primary} !important;
  }
`;
const ErrorStyled = styled.span`
  display: inline-block;
  margin: 5px 0;
  color: ${({ theme }) => theme.textRed};
`;
const Checkbox = ({ question, name, ...props }) => {
  const { control } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name, control });
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Form.Item valuePropName="checked">
            <CheckboxStyled {...field} {...props}>
              {question}
            </CheckboxStyled>
          </Form.Item>
        )}
      />
      {!!error && <ErrorStyled>{error.message}</ErrorStyled>}
    </div>
  );
};

export default Checkbox;

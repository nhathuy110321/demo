import React from "react";
import { Radio as BaseRadio } from "antd";
import { Controller, useController, useFormContext } from "react-hook-form";
import styled from "styled-components";

const RadioStyled = styled(BaseRadio)`
  & > span:nth-child(2) {
    padding-inline-start: 20px;
    padding-inline-end: 0;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: calc(24 / 18);
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: ${({ theme }) => theme.primary} !important;
    background-color: ${({ theme }) => theme.primary} !important;
  }

  &:hover {
    .ant-radio-inner {
      border-color: ${({ theme }) => theme.primary} !important;
    }
  }
`;
const ErrorStyled = styled.span`
  display: inline-block;
  margin: 5px 0;
  color: ${({ theme }) => theme.textRed};
`;
const Radio = ({ options, name, defaultValue, ...props }) => {
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
          <BaseRadio.Group {...field} {...props}>
            {options.map((option) => (
              <RadioStyled
                key={option.value}
                value={option.value}
                defaultChecked={defaultValue}
              >
                {option.label}
              </RadioStyled>
            ))}
          </BaseRadio.Group>
        )}
      />
      {!!error && <ErrorStyled>{error.message}</ErrorStyled>}
    </div>
  );
};

export default Radio;

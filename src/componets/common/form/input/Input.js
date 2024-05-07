import { Input as BaseInput } from "antd";
import styled from "styled-components";
import { Controller, useController, useFormContext } from "react-hook-form";
const { TextArea } = BaseInput;

const FormControl = styled.div`
  position: relative;
  /* max-width: 400px; */
  width: 100%;
  margin-bottom: 15px;
  /* .ant-input {
  } */
  &.has-icon {
    & > input {
      padding-left: 80px;
    }
  }
`;

const InputStyled = styled(BaseInput)`
  padding: 0 20px;
  height: 55px;
  border: 1px solid #858585;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.gray};
  border-radius: 5px;
  width: 100%;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px rgba(106, 152, 60, 0.1);
  }
`;
const TextAreaStyled = styled(TextArea)`
  height: auto;
  width: 100%;
`;

const LabelStyled = styled.label`
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.textPrimary};
`;

const IconStyled = styled.div`
  position: absolute;
  top: 34px;
  height: 55px;
  width: 60px;
  border-right: 1px solid #858585;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ErrorStyled = styled.span`
  display: inline-block;
  margin: 5px 0;
  color: ${({ theme }) => theme.textRed};
`;

const Input = ({ labelname, name, icon, type = "text", ...props }) => {
  const { control } = useFormContext();

  const {
    fieldState: { error },
  } = useController({ name, control });
  return (
    <>
      <FormControl>
        <LabelStyled htmlFor={name}>{labelname}</LabelStyled>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              {type !== "textarea" ? (
                <InputStyled id={name} {...field} type={type} {...props} />
              ) : (
                <TextAreaStyled id={name} {...field} type={type} {...props} />
              )}
              {icon && <IconStyled>{icon}</IconStyled>}
            </>
          )}
        />
      </FormControl>
      {!!error && (
        <ErrorStyled>
          {error.message.split("|").map((err) => (
            <span key={err} style={{ display: "block" }}>
              {err}
            </span>
          ))}
        </ErrorStyled>
      )}
    </>
  );
};

export default Input;

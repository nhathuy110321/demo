import * as yup from "yup";

const SchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("Không được để trống")
    .max(32, "Không được dài quá 32 Ký tự")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không hợp lệ"),
  password: yup
    .string()
    .required("Không được để trống")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()-+=|{}[\]:;<>,.?/~]).{8,16}$/,
      `Password phải có ít nhất 8 ký tự và không vượt quá 16 ký tự.| 
       Password có ít nhất 1 ký tự viết hoa.|
       Password có ít nhất 1 ký tự đặc biệt.`
    ),
});

export default SchemaLogin;

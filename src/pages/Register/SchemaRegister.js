import * as yup from "yup";
const isAge = (value) => {
  const DOB = new Date(value);
  const today = new Date();
  const msDiff = today - DOB;
  const age = Math.floor(msDiff / (1000 * 60 * 60 * 24 * 365.25));
  return age >= 18;
};
const SchemaRegister = yup.object().shape({
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
  confirmPassword: yup
    .string()
    .required("Không được để trống")
    .oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),

  nickName: yup.string().required("Không được để trống"),

  gender: yup.string().required("Không được để trống"),

  province: yup.string().required("Không được để trống"),

  dob: yup
    .string()
    .required("Không được để trống")
    .matches(
      /[1-9][0-9][0-9]{2}\/([0][1-9]|[1][0-2])\/([1-2][0-9]|[0][1-9]|[3][0-1])/,
      "Phải nhập theo định dạng yyyy/mm/dd"
    )
    .test("isAge", "Bạn phải trên 18 tuổi", (value) => isAge(value)),
  lastName: yup.string().required("Không được để trống"),
  firstName: yup.string().required("Không được để trống"),
  phone: yup
    .string()
    .required("Không được để trống")
    .matches(
      /^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$/,
      "Số điện thoại không đúng"
    ),
  terms: yup
    .boolean()
    .required()
    .test("isChecked", "Vui lòng xác nhận điều kiên", (value) => value),
});

export default SchemaRegister;

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth_user from "../Firebase/authConfig";

import "../sass/_UserRegister.scss";

//user and password validation
const schema = yup.object().shape({
  email: yup
    .string()
    .required("This is a required field")
    .email("invalid Email"),
  password: yup
    .string()
    .required("This is a required field")
    .min(8, "the password requires at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords don't match"),
});

function UserRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //function to redirect
  /*   const navigate = useNavigate("/home"); */

  const registerForm = (data) => {
    createUserWithEmailAndPassword(auth_user, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log("Error to add User", error);
      });
  };

  return (
    <div className="Register_wrapp">
      <div className="backgroundimg"></div>
      <div className="Register-box">
        <p className="title">Register Form</p>
        <form onSubmit={handleSubmit(registerForm)}>
          <div className="user row">
            <label className="col-4">Email</label>
            <input
              className="col-6"
              type="email"
              placeholder="name@email.com"
              {...register("email", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.email && errors.email.message}
            </span>
          </div>

          <div className="pass row">
            <label className="col-4">Password</label>
            <input
              className="col-6"
              type="password"
              placeholder="******"
              {...register("password", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.password && errors.password.message}
            </span>
            <div className="pass row">
              <label className="col-4">Confirm Password</label>
              <input
                className="col-6"
                type="password"
                placeholder="******"
                {...register("confirmPassword")}
              />
              <span style={{ color: "red" }}>
                {errors.confirmPassword && errors.confirmPassword.message}
              </span>
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;

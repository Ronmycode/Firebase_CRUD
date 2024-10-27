import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth_user from "../Firebase/authConfig";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const registerForm = (data) => {
    createUserWithEmailAndPassword(auth_user, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/"); // route to follow after successfully login in
      })
      .catch((error) => {
        console.log("Error to add User", error);
      });
  };

  return (
    <div>
      <h1>Register Form</h1>

      <form onSubmit={handleSubmit(registerForm)}>
        <div>
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            placeholder="name@email.com"
            {...register("email", { required: true })}
          />
          <span style={{ color: "red" }}>
            {errors.email && errors.email.message}
          </span>
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="******"
            {...register("password", { required: true })}
          />
          <span style={{ color: "red" }}>
            {errors.password && errors.password.message}
          </span>
          <div>
            <label htmlFor="">Confirm Password</label>
            <input type="password" {...register("confirmPassword")} />
            <span style={{ color: "red" }}>
              {errors.confirmPassword && errors.confirmPassword.message}
            </span>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserRegister;

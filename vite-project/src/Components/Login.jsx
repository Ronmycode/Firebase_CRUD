import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import auth_user from "../Firebase/authConfig";
import Swal from "sweetalert2";
import "../sass/_Login.scss";
import { Link, useNavigate } from "react-router-dom";
//tHIS WILL LOOK FOR AN EXISTING TOKEN IN THE LOCAL STORAGE
import { useEffect } from "react";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //function to redirect
  const navigate = useNavigate();

  //This function looks for a token in the local storage
  // if true redirects user to UserHome
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      navigate("/UserHome");
    }
  }, [navigate]);

  //login method
  const loginForm = (data) => {
    signInWithEmailAndPassword(auth_user, data.email, data.password)
      .then((userCredentials) => {
        //This is a user validation tha's why is (.user)
        const user = userCredentials.user;

        //save user data in local storage
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/UserHome");
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          title: "Invalid",
          text: "The credentials are invalid",
          icon: "warning",
        });
      });
  };
  return (
    <div className="Login_wrapp">
      <div className="backgroundimg"></div>
      <div className="Login-box">
        <p className="title">Log in</p>
        <form onSubmit={handleSubmit(loginForm)}>
          <div className="user row">
            <label className="col-4">Email </label>
            <input
              className="col-6"
              type="email"
              placeholder="name@email.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>Required Field</span>
            )}
          </div>

          <div className="pass row">
            <label className="col-4">Password </label>
            <input
              className="col-6"
              type="password"
              placeholder="******"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span style={{ color: "red" }}>Required Field</span>
            )}
          </div>

          <button type="submit">Login</button>
          <br />
          <p>Or</p>
          <Link to={"/UserRegister"}>
            <p>create an Account</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

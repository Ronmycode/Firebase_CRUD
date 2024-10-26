import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import auth_user from "../Firebase/authConfig";
import Swal from "sweetalert2";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //login method
  const loginForm = (data) => {
    signInWithEmailAndPassword(auth_user, data.email, data.password)
      .then((userCredentials) => {
        //user validation (.user)
        const user = userCredentials.user;
        console.log(user);
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
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit(loginForm)}>
        <div>
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            placeholder="name@email.com"
            {...register("email", { required: true })}
          />
          {errors.email && <span style={{ color: "red" }}>Required Field</span>}
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="******"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span style={{ color: "red" }}>Required Field</span>
          )}
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;

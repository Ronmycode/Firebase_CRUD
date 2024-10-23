function Login() {
  //React-hook-form
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <h1>Log in</h1>
      <div>
        <label htmlFor="">Email Address</label>
        <input
          type="email"
          placeholder="name@email.com"
          {...register("email", { required: true })}
        />
        {error.email && <span style={{ color: "red" }}>Required Field</span>}
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
    </div>
  );
}

export default Login;

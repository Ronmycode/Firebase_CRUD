import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import db from "../Firebase/appConfig";
import { useNavigate } from "react-router-dom";
import "../sass/_Register.scss";

function Register() {
  const {
    register,
    handleSubmit,
    /*   watch,
    formState: { errors }, */
  } = useForm();

  //redirect route
  const navigate = useNavigate();

  const saveProduct = async (data) => {
    console.log("saved successfuly");

    // connecting to our db to post changes
    try {
      await addDoc(collection(db, "Furniture"), {
        name: data.name,
        color: data.color,
        img: data.img,
      });
    } catch {
      console.error("Error!! Product not added to the inventory", error);
    }
    navigate("/Products");
  };

  return (
    <div className="register-wrapp">
      <h2>Iventory Form</h2>
      <div className="box"></div>
      <form className="Register-item-box" onSubmit={handleSubmit(saveProduct)}>
        <div className=" row">
          <label className="col-4" htmlFor="">
            Add inventory
          </label>
          <input className="col-6" type="text" {...register("name")} />
        </div>

        <div className="row">
          <label className="col-4" htmlFor="">
            Color
          </label>
          <input className="col-6" type="text" {...register("color")} />
        </div>

        <div className="row">
          <label className="col-4" htmlFor="">
            Img
          </label>
          <input className="col-6" type="img" {...register("img")} />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Register;

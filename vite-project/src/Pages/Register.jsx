import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import db from "../Firebase/appConfig";
import { useNavigate } from "react-router-dom";

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
      });
    } catch {
      console.error("Error!! Product not added to the inventory", error);
    }
    navigate("/Products");
  };

  return (
    <div>
      <h2>Iventory Form</h2>
      <form action="" onSubmit={handleSubmit(saveProduct)}>
        <div>
          <label htmlFor="">Add inventory</label>
          <input type="text" {...register("name")} />
        </div>

        <div>
          <label htmlFor="">Color</label>
          <input type="text" {...register("color")} />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Register;

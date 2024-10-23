import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../Firebase/appConfig";
import { useForm } from "react-hook-form";

export function EditForm() {
  //React-hook-form
  const {
    register,
    setValue,
    handleSubmit,
    /* formState: { errors }, */
  } = useForm();

  //useParams for edeting inventory throug id
  const { id } = useParams();

  const navigate = useNavigate();

  //getting the selected document from db
  useEffect(() => {
    const getProductById = async () => {
      const productDoc = await getDoc(doc(db, "Furniture", id));
      console.log(productDoc);

      //Validation to edit Inventory
      if (productDoc.exists()) {
        const productData = productDoc.data();
        console.log(productData);

        //Adding the date from the Inventory item into the form
        setValue("name", productData.name);
        setValue("color", productData.color);
      } else {
        console.log("The item doen't exist in the Inventory");
      }
    };
    getProductById();
  }, []);

  const editProduct = async (data) => {
    try {
      updateDoc(doc(db, "Furniture", id), {
        name: data.name,
        color: data.color,
      });
      navigate("/Products");
    } catch (error) {
      console.error("There was an error updating this product", error);
    }
  };

  return (
    <div>
      <h2>Edit Product </h2>
      <form action="" onSubmit={handleSubmit(editProduct)}>
        <div>
          <label htmlFor="">Add inventory</label>
          <input type="text" {...register("name")} />
        </div>

        <div>
          <label htmlFor="">Color</label>
          <input type="text" {...register("color")} />
        </div>

        <button type="submit">Save Product</button>
      </form>
    </div>
  );
}

export default EditForm;

import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../Firebase/appConfig";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../sass/_Products.scss";

function Products() {
  const [product, setproducts] = useState([]);

  useEffect(() => {
    //Connecting to the DB and retriving the data into array_products
    onSnapshot(collection(db, "Furniture"), (snapshot) => {
      const array_products = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }; // here is the data that we're requesting to the DB
      });
      setproducts(array_products);
    });
  }, []);

  //delete product alert
  const deleteProduct = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          //Delete the product
          deleteDoc(doc(db, "Furniture", id));
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error("There was an error deleting this product", error);
    }
  };

  return (
    <div className="product-wrapper">
      <h2>Product List</h2>
      <div className="col-10 text-center cardss">
        {product.length > 0 ? (
          product.map((prod) => (
            <div className="card-group" key={prod.id}>
              <div className="card">
                <img src={prod.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="card-text">{prod.color}</p>
                  {/* <img src={prod.img} alt="" /> */}
                  <Link className="btn" to={`/editInventory/${prod.id}`}>
                    Edit
                  </Link>
                  <Link className="btn" onClick={() => deleteProduct(prod.id)}>
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>There is no Inventory</p>
        )}
      </div>
    </div>
  );
}

export default Products;

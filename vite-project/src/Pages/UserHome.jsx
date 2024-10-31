import { useState, useEffect } from "react";
import auth_user from "../Firebase/authConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "../Components/Login";
import "../sass/_UserHome.scss";
import Register from "./Register";
import Products from "./Products";
import EditForm from "../Components/EditForm";

function UserHome() {
  const [user, setUser] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth_user, (userFirebase) => {
      if (userFirebase) {
        setUser(userFirebase);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Clean up on unmount
  }, []);

  //Logout Method
  const logout = () => {
    signOut(auth_user)
      .then(() => {
        alert("You Hvae closed your session!");
      })
      .catch((error) => {
        console.error("There was an error closing your session", error);
      });
  };

  // Function to render components based on selectedComponent
  const renderComponent = () => {
    switch (selectedComponent) {
      case "Dashboard":
        return <h2>Dashboard Content</h2>;
      case "Inventory":
        return <Products />;
      case "AddInventory":
        return <Register />;
      case "Activity":
        return <EditForm />;
      case "Register":
        return <h2>Activity Content</h2>;
      default:
        return <h2>Welcome</h2>;
    }
  };

  return (
    <div>
      {user ? (
        <div className="UserHome row ">
          {/* 
          #### User Home Left side
          */}
          <div className="user_col_left col">
            <div className="user_info ">
              {/* <p>User Name</p> This will be added later on*/}
              <div className="img_prof">
                <img
                  src="https://res.cloudinary.com/dymsokiwr/image/upload/v1730260595/avatar_osjnla.jpg"
                  alt="Avatar"
                />
              </div>
              <div className="user_menu">
                <ul className="">
                  <li className="text-center">
                    <button
                      onClick={() => setSelectedComponent("Dashboard")}
                      className="btn"
                    >
                      <i className="bi bi-speedometer"></i>
                      Dashboard
                    </button>
                  </li>
                  <li className="text-center">
                    <button
                      onClick={() => setSelectedComponent("Inventory")}
                      className="btn"
                    >
                      <i className="bi bi-bag-check"></i>
                      Inventory
                    </button>
                  </li>
                  <li className="text-center">
                    <button
                      onClick={() => setSelectedComponent("AddInventory")}
                      className="btn"
                    >
                      <i className="bi bi-briefcase"></i>
                      Add Inventory
                    </button>
                  </li>
                  <li className="text-center">
                    <button
                      onClick={() => setSelectedComponent("EditForm")}
                      className="btn"
                    >
                      <i className="bi bi-bell"></i>
                      Edit Form
                    </button>
                  </li>
                  <li className="text-center">
                    <button onClick={logout} className="btn logout">
                      <i className="bi bi-box-arrow-left"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 
          #### User Home center
          */}

          <div className="user_col_center col-lg-6 ">
            <h1 className="welcome-title">Welcome</h1>
            <p className="welcome-sub-title">you have entered your session</p>
            {renderComponent()}
          </div>

          {/* 
          #### User Home right side
          */}
          <div className="user_col_right col-3"></div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default UserHome;

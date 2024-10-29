import { useState } from "react";
import auth_user from "../Firebase/authConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "../Components/Login";
import "../sass/_UserHome.scss";
import Register from "./Register";

function UserHome() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth_user, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

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

  return (
    <div>
      {user ? (
        <div className="UserHome row">
          {/* 
          #### User Home Left side
          */}
          <div className="user_col_left col">
            <div className="user_info">
              <p>User Name</p>
              <div className="img_prof">
                {/*    <img
                  src="https://res.cloudinary.com/dymsokiwr/image/upload/v1730178008/avatar_vnfgui.png"
                  alt="Avatar"
                /> */}
              </div>
              <div className="user_menu">
                <ul className="">
                  <li>
                    <button className="btn">
                      <i className="bi bi-speedometer"></i>
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button className="btn">
                      <i className="bi bi-briefcase"></i>
                      Clients
                    </button>
                  </li>
                  <li>
                    <button className="btn">
                      <i className="bi bi-person"></i>
                      Memebers
                    </button>
                  </li>
                  <li>
                    <button className="btn">
                      <i className="bi bi-bell"></i>
                      Activity
                    </button>
                  </li>
                  <li>
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

          <div className="user_col_center col-lg-6">
            <h1>Welcome</h1>
            <p>you have entered your session</p>
            <Register />
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

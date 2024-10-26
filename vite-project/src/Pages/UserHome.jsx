import { useState } from "react";
import auth_user from "../Firebase/authConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "../Components/Login";

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
        <>
          <h1>Welcome</h1>
          <p>you have entered your session</p>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default UserHome;

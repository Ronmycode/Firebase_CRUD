import { useState } from "react";
import auth_user from "../Firebase/authConfig";
import { onAuthStateChanged } from "firebase/auth";
import Login from "../Components/Login";

auth_user;

function UserHome() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth_user, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      {/* user session validation */}
      {user ? (
        <>
          <h1>Welcome</h1>
          <p>you have entered your session</p>
          <button>Log Out</button>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default UserHome;

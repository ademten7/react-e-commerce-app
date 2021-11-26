import React, { useContext } from "react";
import "./Profile.scss";
//for signout
import { getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/context";

getAuth();
const Profile = () => {
  useNavigate();
  const { user, setUser } = useContext(MyContext);
  // const logOutGoogle = () => {
  //   signOut(auth).then(() => {
  //     setUser(null);
  //     //   navigate("/", { replace: true }); replace olmadan da calisiyor.
  //     navigate("/");
  //   });
  // };
  console.log(user);
  return (
    <div className="profile">
      {user && (
        <div>
          <h1 className="profile-header">Welcome {user.displayName}</h1>
          <div className="profile-info">
            <img
              className="profile-image"
              src={user.photoURL}
              alt=""
              width="300"
              height="300"
            />
            <h3>User Name: {user.displayName}</h3>
            <h3>User Email: {user.email}</h3>
          </div>
        </div>
      )}

      <div>
        {/* <button className="btn-prima" onClick={logOutGoogle}>
        Logout
      </button> */}
        <button
          className="btn-prima"
          onClick={() => {
            localStorage.clear();
            setUser(null);
          }}
        >
          Logout
        </button>
        <Link to="/">
          <button>Go Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;

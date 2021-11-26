import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const NotFound = () => {
  //   let history = useHistory();

  return (
    <div className="NotFound">
      <img
        src="https://www.klaviyo.com/wp-content/uploads/2017/06/image4-1.png "
        alt=""
        width="700"
      />
      <Link to="/">
        <button>Go Home Page</button>
      </Link>
    </div>
  );
};

export default NotFound;

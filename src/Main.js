import React from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <>
      <h3>Main</h3>
      <ul>
        <Link to="/manual/1">
          <li>1 페이지</li>
        </Link>
        <Link to="/manual/2">
          <li>2 페이지</li>
        </Link>
      </ul>
    </>
  );
};

export default Main;

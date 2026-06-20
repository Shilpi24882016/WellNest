import React from "react";

import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <Link to="/"></Link>
      <Link to="/login"> Login </Link>
      <Link to="/registration"> Registration</Link>
    </>
  );
}

export default Navbar;

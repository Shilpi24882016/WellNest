import React from "react";
import { Link } from "react-router";

function Registration() {
  return (
    <>
      <div>
        <form>
          <label htmlFor="name">User Name</label>
          <input type="text" placeholder="Enter your Name" />
          <br />

          <label htmlFor="email">Email ID</label>
          <input type="email" placeholder="Enter you Email ID" />
          <br />

          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
          <br />

        </form>
        <p>Have an account<span><Link to="/login">Sign In</Link></span></p>
      </div>
    </>
  );
}

export default Registration;

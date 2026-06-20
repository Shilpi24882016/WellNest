import React from "react";
import { Link } from "react-router";

function Registration() {
  return (
    <>
      <div>
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Enter your name" />
          <br />

          <label htmlFor="email">Email ID</label>
          <input type="email" placeholder="Enter you Email ID" />
          <br />

          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
          <br />

        </form>
      </div>
    </>
  );
}

export default Registration;

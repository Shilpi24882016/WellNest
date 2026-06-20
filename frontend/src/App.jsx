import React from "react";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;

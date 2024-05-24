import React from 'react'
import "./Home.css"
import { FaHome } from "react-icons/fa";
import img from "../../Images/contactprop.jpeg"
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const handlehomedirection = () => {
      navigate("/");
    };
    const handlesignupdiection = () => {
        navigate("/signup");
    }
    const handleloginupdiection = () => {
        navigate("/login");
    }
  return (
    <div className="homediv">
      <div className="navdiv">
        <div onClick={handlehomedirection}>
          <p className="homeheading">
            <FaHome />
            Home
          </p>
        </div>

        <div>
          <button className="signuphomebutton" onClick={handlesignupdiection}>
            {" "}
            Signup
          </button>
          <button className="signuphomebutton" onClick={handleloginupdiection}>
            Login
          </button>
        </div>
      </div>
      <div className="homediv2"></div>
    </div>
  );
}

export default Home

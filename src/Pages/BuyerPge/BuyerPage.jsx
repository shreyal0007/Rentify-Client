import React from "react";
import "./BuyerPage.css";
import { AiOutlineLogout } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import PropertCard from "../../Components/PropertyCard/PropertyCard";
import { useNavigate } from "react-router-dom";
const BuyerPage = () => {
    const navigate = useNavigate();
    const handlelogout = () => {
    localStorage.clear();
    navigate("/");
    }
  return (
    <div className="buyermain">
      <div className="buyerbuttondiv">
        <button
          className="buyerhomebutton"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
          Home
        </button>
        <button onClick={handlelogout} className="buyerlogoutbutton">
          Logout
          <AiOutlineLogout />
        </button>
      </div>
      <p className="buyerheading">List of Available Properties</p>
      <PropertCard></PropertCard>
    </div>
  );
};

export default BuyerPage;

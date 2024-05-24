import React, { useState } from "react";
import "./SellerForm.css";
import { FaHome } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import img from "../../Images/propertydetail.jpg"
import {useNavigate, useLocation,useParams } from "react-router-dom";

export default function SellerForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
  const [detail, setDetail] = useState(location.state?.item || {
    image: "",
    bedroom: "",
    bathroom: "",
    hospitals: "",
    price: "",
    size: "",
    location: "",
    email:"",
  });

  let name, value;
    const handleMyProperty = () => {
    navigate("/myproperty");
    }
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setDetail({ ...detail, [name]: value, email: localStorage.getItem("email")});

  };
  const handlelogout = () => {
    localStorage.clear();
    navigate("/");
  }
  const move = () => {
    navigate("/details");
  };
  const func = async () => {
    const { image , bedroom ,bathroom,hospitals, price , size , location, email } = detail;
    const res = await fetch(
      "https://server-rentify.azurewebsites.net/user/postdetails",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          image: image,
          bedroom: bedroom,
          bathroom: bathroom,
          hospitals: hospitals,
          price: price,
          size: size,
          location: location,
          email: email,
        }),
      }
    );
    const data = await res.json();
    if (data.status === 400) {
      window.alert("error");
    } else {
      window.alert("Details uploaded successfully!");
    }
  }
  const update = async () => {
    const { image ,bedroom,bathroom,hospitals, price , size , location, email } = detail;
    const res = await fetch(
      `https://server-rentify.azurewebsites.net/user/updateDetail/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          image: image,
          bedroom: bedroom,
          bathroom: bathroom,
          hospitals: hospitals,
          price: price,
          size: size,
          location: location,
          email: email,
          _id: id,
        }),
      }
    );
    const data = await res.json();
    if (data.status === 400) {
      window.alert("error");
    } else {
      window.alert("Details updated successfully!");
      navigate("/myproperty");
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = id ? update() : func();
  };
  return (
    <div className="mainsellerdiv">
      <div className="sellerbuttondiv">
        <button
          className="sellerhomebutton"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
          Home
        </button>
        <button className="view-details-button" onClick={handleMyProperty}>
          View My PropertDetails
        </button>
        <button className="sellerlogoutbutton" onClick={handlelogout}>
          Logout
          <AiOutlineLogout />
        </button>
      </div>
      <div className="carddd">
        <div className="signupImg">
          <img src={img} alt="" />
        </div>
        <div className="signupForm">
          <h1>Details Form</h1>
          <div>
            <label className="image" htmlFor="image">
              Image Link
            </label>
            <input
              type="text"
              value={detail.image}
              name="image"
              onChange={handleInput}
              id="image"
              required
              placeholder="Enter the image link"
            />
            <div className="types">
              <div className="subtypes">
                <label className="bedroom" htmlFor="bedroom">
                  Bedrooms
                </label>
                <input
                  type="int"
                  className="bedroominput"
                  value={detail.bedroom}
                  name="bedroom"
                  id="bedroom"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="subtypes">
                <label className="bathroom" htmlFor="bathroom">
                  Bathrooms
                </label>
                <input
                  type="text"
                  className="bedroominput"
                  value={detail.bathroom}
                  name="bathroom"
                  id="bathroom"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="subtypes">
                <label className="hospitals" htmlFor="hospitals">
                  Hospitals
                </label>
                <input
                  type="number"
                  className="bedroominput"
                  value={detail.hospitals}
                  name="hospitals"
                  id="hospitals"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>

            <label className="price" htmlFor="price">
              Price
            </label>
            <input
              type="text"
              value={detail.price}
              name="price"
              onChange={handleInput}
              id="price"
              required
              placeholder="Enter the price of property"
            />
            <label className="size" htmlFor="size">
              Size
            </label>
            <input
              type="text"
              name="size"
              id="size"
              onChange={handleInput}
              value={detail.size}
              required
              placeholder="Enter the size of property"
            />
            <label className="location" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={detail.location}
              onChange={handleInput}
              id="location"
              required
              placeholder="Enter the property location"
            />

            <button className="signupbtn" onClick={handleSubmit}>
              {location.state?.item ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

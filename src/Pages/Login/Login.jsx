import React, { useState } from "react";
import "./Login.css";
import img1 from "../../Images/userdetail.jpeg";
import { json, Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ email: "", password: "" , role: ""});
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handlerolechange = (e) => {
    setCreds({ ...creds, role: e.target.value });
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { email, password } = creds;
    try {
      const response = await fetch(
        "https://server-rentify.azurewebsites.net/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const json = await response.json();
      console.log(json);
      if (json.success) {
        // save the auth token and redirect
        localStorage.setItem("token", json.accessToken);
        localStorage.setItem("email", json.user.email);
        window.alert("Login successful");
        if(creds.role === "buyer"){
          window.location.href = "/buyerpage";
        }
        else{
          window.location.href = "/sellerform";
        }
      } else {
        window.alert(json.message);
        console.log("kuch bhi");
      }
    } catch (err) {
      console.error("Network error:", err);
      window.alert(
        json.message
      );
    }
  };

  return (
    <div className="card">
      <div className="signupForm">
        <h1>Login</h1>
        <div>
          <label className="email" htmlFor="email">
            EMAIL
          </label>
          <input
            type="text"
            // value={detail.email}
            name="email"
            id="email"
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
          <label className="phnumber" htmlFor="phnumber">
            Password
          </label>
          <input
            type="password"
            // value={detail.contactnumber}
            name="password"
            onChange={handleChange}
            id="password"
            required
            placeholder="Enter your Password"
          />
          <label className="loginass" htmlFor="loginas">
            Login As
          </label>
          <select
            name="loginas"
            value={creds.role}
            onChange={handlerolechange}
            id="loginas"
            className="loginas"
            required
          >
            <option disabled={true} value="">
              Choose a role
            </option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <button className="signupbtn" onClick={handlesubmit}>
            SUBMIT
          </button>
          <p className="noaccounttext">
            Do not have a account ?{" "}
            <a href="/signup" className="anchor">
              Sign-up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

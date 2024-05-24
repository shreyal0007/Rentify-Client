import React, { useState } from "react";
import "./Signup.css";
import img1 from "../../Images/userdetail.jpeg";
import { Link, useNavigate } from "react-router-dom";


export default function Signup() {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    email: "",
    username: "",
    password: "",
    number: "",
  });
  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handleSignin = async (e) => {
    e.preventDefault();
    const { email, username, password,number} = creds;
    const response = await fetch(
      "https://server-rentify.azurewebsites.net/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
          number: number,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    console.log(json.success);

    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.accessToken);
      localStorage.setItem("email", json.email);
      window.alert("Signup successful");
      navigate("/login");
    } else {
      window.alert(json.message);
    }
  };

  return (
    <div className="card3">
      <div className="signupForm">
        <h1>Signup</h1>
        <div>
          <label className="email" htmlFor="email">
            Usename
          </label>
          <input
            type="text"
            // value={detail.email}
            name="username"
            id="username"
            onChange={onChange}
            required
            placeholder="Enter your username"
          />
          <label className="email" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            // value={detail.email}
            name="email"
            id="email"
            onChange={onChange}
            required
            placeholder="Enter your email"
          />
          <label className="number" htmlFor="number">
            Phone Number
          </label>
          <input
            type="text"
            // value={detail.email}
            name="number"
            id="number"
            onChange={onChange}
            required
            placeholder="Enter the phone number"
          />
          <label className="phnumber" htmlFor="phnumber">
            Password
          </label>
          <input
            type="password"
            // value={detail.contactnumber}
            name="password"
            onChange={onChange}
            id="password"
            required
            placeholder="Enter your Password"
          />
          <button className="signupbtn" onClick={handleSignin}>
            SUBMIT
          </button>
          <p className="noaccounttext">
            Already have an account?
            <a href="/login" className="anchor">
              Log-in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

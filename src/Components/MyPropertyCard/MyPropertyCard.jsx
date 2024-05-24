import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MyPropertyCard.css";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const MyPropertyCard = () => {
    const navigate = useNavigate();
    const handleUpdate = (item) => {
        navigate(`/sellerform/${item._id}`,{state:{item}});
    }
    const handleDeleteDetails = async (item) => {
    try {
        console.log(item)
      const response = await fetch(
        "https://server-rentify.azurewebsites.net/user/deleteDetail",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            _id: item,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      window.alert("Property Deleted Successfully");
      window.location.reload();
      
    } 
    catch (err) {
      console.error("Network error:", err);
      window.alert(
        "An error occurred while deleting property details. Please try again later."
      );
    }
};

  const [course, setCourse] = useState();

  useEffect(() => {
    console.log(course);
  }, [course]);
    useEffect(() => {
      const fetchCourseDetails = async () => {
        try {
          const response = await fetch(
            "https://server-rentify.azurewebsites.net/user/getDetailByEmail",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              body: JSON.stringify({
                email: localStorage.getItem("email"),
              }),
            }
          );
          const json = await response.json();
          console.log(json.details);
          
          setCourse(json.details);
          console.log(course);
        } catch (err) {
          console.error("Network error:", err);
          window.alert(
            "An error occurred while fetching course details. Please try again later."
          );
        }
      };

      fetchCourseDetails();
    }, []);
  return (
    <div className="coursecardmain">
      {course &&
        course?.map((item) => (
          <div className="coursecard">
            <div className="coursecarddiv1">
              <img
                src={item.image}
                alt="img not available"
                className="coursecardimage"
              ></img>
            </div>
            <div className="coursecarddiv2">
              <div className="subdiv">
                {/* <h2 className="type">{item.type}</h2> */}
                <p className="bedroomdiv">
                  <FaBed />
                  {item.bedroom}
                </p>
                <p className="bedroomdiv">
                  <FaBath />
                  Bathroom
                </p>
                <p className="bedroomdiv">
                  <FaHospitalAlt />
                  {item.hospitals}
                </p>
              </div>
              <div className="pricesize">
                <p className="prices">{item.price}</p>
                <p className="sizee">{item.size}</p>
              </div>
              <p className="location">Location : {item.location}</p>
            </div>
            <div className="buttonsdiv">
              <button
                className="updatebutton"
                onClick={() => handleUpdate(item)}
              >
                Update
              </button>
              <button
                className="deletebutton"
                onClick={() => handleDeleteDetails(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MyPropertyCard;



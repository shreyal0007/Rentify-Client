import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PropertyCard.css";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PropertCard = () => {
  const [course, setCourse] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://server-rentify.azurewebsites.net/user/getPropertyDetails"
      );
      setCourse(response.data.details);
      console.log(response.data.details);
    };
    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const applyFilter = (properties) => {
    if (selectedFilter === "price-high-low") {
      return properties.sort((a, b) => b.price - a.price);
    }
    if (selectedFilter === "price-low-high") {
      return properties.sort((a, b) => a.price - b.price);
    }
    if (selectedFilter === "size-high-low") {
      return properties.sort((a, b) => parseInt(b.size) - parseInt(a.size));
    }
    if (selectedFilter === "size-low-high") {
      return properties.sort((a, b) => parseInt(a.size) - parseInt(b.size));
    }
    return properties;
  };

  const filteredProperties = applyFilter([...course]);

  return (
    <div>
      <div className="filter-dropdown">
        <select
          onChange={handleFilterChange}
          value={selectedFilter}
          className="filter"
        >
          <option value="">Select Filter</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="size-high-low">Size: High to Low</option>
          <option value="size-low-high">Size: Low to High</option>
        </select>
      </div>
      <div className="coursecardmain">
        {filteredProperties.map((item) => (
          <div className="coursecard1" key={item._id}>
            <div className="coursecarddiv1">
              <img
                src={item.image}
                alt="img not available"
                className="coursecardimage"
              />
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
            <div className="coursecarddiv3">
              <Link to={`/buyerpage/${item._id}`} className="coursecardbutton">
                I am Interested
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertCard;

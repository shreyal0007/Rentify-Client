import React, { useEffect,useState } from 'react'
import "./IndividualContactPage.css"
import img from "../../Images/contactprop.jpeg"
const IndividualContactPage = () => {
    const id=window.location.pathname.split("/")[2];
    const[email,setEmail]=useState("");
    const[username,setUsername]=useState("");
    const[number,setNumber]=useState("");
    const[email2,setEmail2]=useState("");
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://server-rentify.azurewebsites.net/user/getDetailById",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ _id: id }),
            }
          );
          const json = await response.json();
        //   console.log(json.details[0].email);
          setEmail(json.details[0].email);
          console.log(email)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [id]);


    useEffect(() => {
        const fetchSellerDetails = async () => {
            try {
                const response = await fetch(
                  "https://server-rentify.azurewebsites.net/user/getSellerDetailsByEmail",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    body: JSON.stringify({ email: email }),
                  }
                );
                const json = await response.json();
                console.log(json.details[0].username);

                setUsername(json.details[0].username);
                setNumber(json.details[0].number);
                setEmail2(json.details[0].email);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchSellerDetails();
    }, [email]);
  return (
    <div className="maincontactdiv">
      <div className="contactcard">
        <div>
            <img src={img} alt='img not available'></img>
        </div>
        <div className='divv2'>
          <h1>Contact the Seller</h1>
          <p>{username}</p>
          <p>{email2}</p>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
}

export default IndividualContactPage

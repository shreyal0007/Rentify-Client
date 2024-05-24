import React from 'react'
import "./MyProperty.css"
import MyPropertyCard from '../../Components/MyPropertyCard/MyPropertyCard'
const MyProperty = () => {
  return (
    <div className="mypropertydiv">
        <div className='mypropertyheaderdiv'>
            <p className='mypropertyheading'>Welcome to your dashboard</p>
            <p className='mypropertytext'>Here you can view all the properties you have listed</p>
        </div>
        <MyPropertyCard></MyPropertyCard>
    </div>
  );
}

export default MyProperty


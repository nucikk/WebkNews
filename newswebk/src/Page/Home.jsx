import React from 'react'
import "../Style/Home.css"
import BanerPhoto from "../Photo/pink-clothes-preview.svg"
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      {/* The banner container includes a title and description along with a button for users to shop. 
      It also includes an image to make the banner more appealing. */}
      <div className="banner_container">
        <div className="banner_title">
          <h1>
            LET’S EXPLORE UNIQUE CLOTHES
          </h1>
        </div>
        <div className="banner_description">
          <p>Live for Influential and Innovative fashion!</p>
          <button className="shop_button ">Shop Now</button>
        </div>

        <div className="banner_image">
          <img src={BanerPhoto} alt="banner" />
        </div>
      </div>
    </>
  )
}

export default Home

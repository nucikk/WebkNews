import React from 'react'
import { Link } from 'react-router-dom';
import "../Style/Home.css"
import BanerPhoto from "../Photo/pink-clothes-preview.svg"
const Home = () => {
  const navMenu = ["CATALOGE", "FASHION", "FAVOURITE", "LIFESTYLE"]
  return (
    <>
      {/* function that is mapping through the array of navMenu and returning a list item with a
          link to the lowercase of the list item. */}
      <nav className="navbar_container">
        <h1 className='logo'>SHOPWEBK</h1>
        <ul className="list">
          {navMenu.map((listItem, index) => (
            <li>
              <Link className="nav_link" key={index} to={`/${listItem.toLowerCase()}`}>
                <li>{listItem}</li>
              </Link>
            </li>
          ))}
        </ul>
        <button className="sign_btn">SIGN UP</button>
      </nav>

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

import React from 'react'
import { Link } from 'react-router-dom';
import "../Style/Home.css"
const Home = () => {
  const navMenu = ["CATALOGE", "FASHION", "FAVOURITE", "LIFESTYLE"]
  return (
    <> 
      <nav className="navbar_container">
        <h1 className='logo'>SHOPWEBK</h1>
          <ul className="list_ul">
            {navMenu.map((listItem, index) => (
              <li>
                <Link className="navigate"  key={index} to={`/${listItem.toLowerCase()}`}>
                   <li>{listItem}</li>
                </Link>
              </li>
            ))}
          </ul>
          <button className="sign_btn">SIGN UP</button>
      </nav>
    </>
  )
}

export default Home

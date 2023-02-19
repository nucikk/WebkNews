import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
 const navMenu = ["CATALOGE", "FASHION", "FAVOURITE", "LIFESTYLE"]
 return (
  <div>
   {/* function that is mapping through the array of navMenu and returning a list item with a
          link to the lowercase of the list item. */}
   <nav className="navbar_container">
    <Link to="/">
     <h1 className='logo'>SHOPWEBK</h1>
    </Link>

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
  </div>
 )
}

export default Navbar

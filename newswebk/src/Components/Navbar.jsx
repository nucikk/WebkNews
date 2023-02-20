import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Style/Registration.css"
const Navbar = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const saveUserName = localStorage.getItem("userName")
    if (saveUserName) {
      setUserName(saveUserName)
    }
  }, [])

  const navMenu = ["CATALOGE", "FASHION", "FAVOURITE", "LIFESTYLE"]

  const toggleSignForm = () => {
    if (userName) {
      setUserName("");
      setShowRegistrationForm(false);
    } else {
      setShowRegistrationForm(!showRegistrationForm);
    }
  }

  const handleUserInfoSubmit = (e) => {
    e.preventDefault();
    const fullname = e.target.elements.fullName.value;
    setUserName(fullname)
    localStorage.setItem('userName', fullname)
    setShowRegistrationForm(false);
  }
  return (
    <>
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
        {userName && <p className='username'>{userName}</p>}
        <button className="sign_btn" onClick={toggleSignForm}>
          {userName ? 'LOG OUT' : 'SIGN UP'}
        </button>
        {/* When the "Sign up" button is clicked,
         a registration form is displayed where the user can enter their first name, last name, email address, and password.
         If the user is already logged in, their name and surname are displayed on the website. */}
      </nav>
      <div>
        {showRegistrationForm && (
          <div className="registration_form">
            <form onSubmit={handleUserInfoSubmit}>
              <label className='registration_label'>Full Name:</label>
              <input className='registration_input' type="text" name="fullName"
                defaultValue={userName} />

              <label className='registration_label'>Email:</label>
              <input className='registration_input' type="email" />

              <label className='registration_label'>Password:</label>
              <input className='registration_input' type="password" />

              <button className='registration_button' type="submit">Send</button>
            </form>
          </div>
        )}
      </div>
    </>

  )
}

export default Navbar

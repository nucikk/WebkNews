import React from 'react'
import Navbar from '../Components/Navbar'
import "../Style/Home.css"

const Favourite = () => {
  return (
    <>
      <Navbar />
      <div className="LoadingBar">
        <div className="loading_container">
            <h1>Favourite</h1>
        </div>
      </div>
    </>
  )
}

export default Favourite

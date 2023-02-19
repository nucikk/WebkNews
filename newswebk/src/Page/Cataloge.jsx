import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import "../Style/Cataloge.css"
// add hoodies clothes img 
import hoodies from "../Photo/hoodies.png"
import blackHd from "../Photo/blackHd.png"
import greenHd from "../Photo/greenHd.png"
// add T-shirt clothes img
import pinkTs from "../Photo/pinkTs.png"
import grayTs from "../Photo/greyTs.png"
import brownTs from "../Photo/brownTs.png"
//add Coats clothes img
import lightbrownCs from "../Photo/lightbrownCS.png"
import garyCs from "../Photo/grayCS.png"
import greenCs from "../Photo/greenCS.png"


// I added a new section to the catalog page that displays hoodies and jackets.
// The section includes a Next button that allows the user to browse through different photos of the available hoodies and jackets. 
//When the user clicks on the Next button, a new photo is displayed, providing a better shopping experience.
const Cataloge = () => {
  const [currentHoodiesIndex, setCurrentHoodiesIndex] = useState(0)
  const [currentTshirtIndex, setCurrentTshirtIndex] = useState(0);
  const [currentCoatsIndex, setCurrentCoatsIndex] = useState(0);
  const imagesHoodies = [greenHd, blackHd, hoodies,]
  const imagesTshirt = [grayTs, pinkTs, brownTs]
  const imagesCoats = [lightbrownCs, garyCs, greenCs]

  function handleNextClick() {
    const nextImageHdIndex = (currentHoodiesIndex + 1) % imagesHoodies.length;
    setCurrentHoodiesIndex(nextImageHdIndex)
  }
  function handleNextTsClick() {
    const nextImageTsIndex = (currentTshirtIndex + 1) % imagesTshirt.length;
    setCurrentTshirtIndex(nextImageTsIndex)
  }
  function handleNextCsClick() {
    const nextImageCsIndex = (currentCoatsIndex + 1) % imagesTshirt.length;
    setCurrentCoatsIndex(nextImageCsIndex)
  }

  return (
    <>
      <Navbar />
      <div className="catalog_container">

        <div className="scroll_box">
          <h2 className="catalog_title">NEW ARRIVALS</h2>

          <div className="flex_container">

            <div className="clothes_box">
              <img className="clothes_img" src={imagesHoodies[currentHoodiesIndex]} alt="" />
              <p style={{ color: '#466362', fontWeight: 'bold', fontSize: '23px', marginBottom: '10px' }}>Hoodies & Sweetshirt</p>
              <span className="explore_btn">Explore Now!</span>
              <p className='next_btn' onClick={handleNextClick}>Next</p>
            </div>

            <div className="clothes_box">
              <img className="clothes_img" src={imagesTshirt[currentTshirtIndex]} alt="" />
              <p style={{ color: '#466362', fontWeight: 'bold', fontSize: '23px', marginBottom: '10px' }}>Tees & T-Shirt</p>
              <span className="explore_btn">Explore Now!</span>
              <p className='next_btn' onClick={handleNextTsClick}>Next</p>
            </div>

            <div className="clothes_box">
              <img className="clothes_img" src={imagesCoats[currentCoatsIndex]} alt="" />
              <p style={{ color: '#466362', fontWeight: 'bold', fontSize: '23px', marginBottom: '10px' }}>Coats & Parkas</p>
              <span className="explore_btn">Explore Now!</span>
              <p className='next_btn' onClick={handleNextCsClick}>Next</p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cataloge

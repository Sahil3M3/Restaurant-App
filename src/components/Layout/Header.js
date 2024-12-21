import React from 'react'
import classes from "./Header.module.css"

import mealsImage from "../../assets/meals.jpg"
const Header = () => {
  return (
      <>
      <header className={classes.Header} >

      <h1>ReactMeals</h1>
      <button>Cart</button>
      </header>

      <div className={classes['main-image']}>
      <img src={mealsImage} alt='image-food'></img>
      </div>
      </>
  )
}

export default Header
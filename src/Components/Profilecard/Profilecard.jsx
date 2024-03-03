import React from 'react'
import './Profilecard.css'
import dog from '../Assets/dog.jpg'
const Profilecard = () => {
  return (
    <div>
      <div className="container">
        <div className="top"></div>
        <div className="img">
          <img src={dog} alt="" />
        </div>
        <div className="bottom">
          <h1>Elon Musk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit veritatis amet praesentium veniam rerum fugit, ve</p>
          <a href="">Contact Me</a>
        </div>
      </div>
    </div>
  )
}

export default Profilecard
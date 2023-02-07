import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <div className='HomePage_container'>
      <img className='blue_blob' alt='blue blob' src='/assets/blob-blue.png' />
      <img className='yellow_blob' alt='yellow blob' src='/assets/blob-yellow.png' />
      <h1 className='title'>Quizzical</h1>
      <p className='description'>Fun and brainy quiz</p>
      <Link to="/quiz"><button className='startButton'>Start quiz</button></Link>
    </div>
  )
}


import React from 'react'
import './topbar.css'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-medium"></i>
        <i className="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">Blog</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img className='topImage' src="/images/profile/p-1.jpg" alt="" />
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar

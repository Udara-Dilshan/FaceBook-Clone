import React from 'react'


export default function NavBar() {
  return (
    <div className="NavBarBox">
        <div className="navBarLeft">
            <span className="logo">FaceBook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
              <span className="searchIcon">🔎</span>
              <input placeholder='Search for your friend' className="searchInput" />
            </div>
        </div>
        <div className="navBarRight"></div>
    </div>
  )
}

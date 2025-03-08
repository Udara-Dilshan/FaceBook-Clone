import React from 'react'
import './navBar.css'

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
        <div className="navBarRight">
          <span className="navBarLink">Home</span>
          <span className="navBarLink">Profile</span>
          <div className="navBarIcons">
              <div className="navBarIcon">
                🙍‍♂️
                <span className="iconTag">9</span>
              </div>
              <div className="navBarIcon">
                💬
                <span className="iconTag">6</span>
              </div>
              <div className="navBarIcon">
                ⚙️
                <span className="iconTag">2</span>
                </div>
          </div>
          <div className="pic">
            <img src="/images/1.png" alt="Profile Picture" className="profilePicImg" />
          </div>
        </div>
    </div>
  )
}

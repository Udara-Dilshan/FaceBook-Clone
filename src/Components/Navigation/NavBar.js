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
        <div className="navBarRight">
          <span className="navBarLink">Home</span>
          <span className="navBarLink">Profile</span>
          <div className="navBarIcons">
              <div className="navBarIcon">🙍‍♂️</div>
              <div className="navBarIcon">💬</div>
              <div className="navBarIcon">⚙️</div>
          </div>
        </div>
    </div>
  )
}

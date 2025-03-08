import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar() {
  return (
    <div className="NavBarBox">
        <div className="navBarLeft">
            <span className="logo">FaceBook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className="searchBoxIcon"/>
            </div>
        </div>
        <div className="navBarRight"></div>
    </div>
  )
}

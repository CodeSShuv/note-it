import React from 'react';
import "./Css/navbar.css";

const NavBar = ({ hidden, setHidden }) => {
  const handelClick = () => {
    hidden.sideBar ? setHidden({ sideBar: false, noteItBox: hidden.noteItBox }) : setHidden({ sideBar: true, noteItBox: hidden.noteItBox });
  }
  return (
    <nav>
      <div className="left-side">
        <button className='hamburger-menu' onClick={() => { handelClick() }}>=</button>
        <div className="logo">Note-It</div>
      </div>

    </nav>
  )
}

export default NavBar
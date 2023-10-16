import React from 'react'
import "./Css/sidebar.css"
import {
  Link
} from "react-router-dom";
const SideBar = ({hidden , setHidden}) => {


  return (
    <div className={`side-bar${hidden.sideBar?' hidden':""}`}>
        <div className="create-new-note">
            <button onClick={()=>{setHidden({sideBar:hidden.sideBar, noteItBox:false})}}>Create a Note</button>
        </div>
        <div className="category-list">
          <p>Categories</p>
          <div className="category-list-container">
            <Link to="/">All</Link>
            <Link to="/Personal">Personal</Link>
            <Link to="/Work">Work</Link>
            <Link to="/Important">Important</Link>
          </div>
        </div>
    </div>
  )
}

export default SideBar
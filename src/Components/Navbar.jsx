import React,{useState} from 'react'
import {NavLink,Link, Outlet} from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
   <nav>
    <Link to="/" className="title">Halcyonic</Link>
    <div className='menu' onClick={() => {
      setMenuOpen(!menuOpen)
    }}>
     <span></span>
     <span></span>
     <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/">Homepage</NavLink></li>
        <li><NavLink to="/threeColumn">Three Column</NavLink></li>
        <li><NavLink to="/twoColumn1">Two Column#1</NavLink></li>
        <li><NavLink to="/twoColumn2">Two Column#2</NavLink></li>
        <li><NavLink to="/oneColumn">One Column</NavLink></li>
    </ul>
    <Outlet/>
   </nav>
  )
}

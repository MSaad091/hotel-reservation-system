// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className="nav-container">
//       <h1 className="logo">Multin</h1>

//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/bill">Bill</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inventry">Inventry</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>

//       <div className="btns">
//         {/* <button className="login">Login</button> */}
//         <button className="sign">Sign up</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="nav-container">
        <h1 className="logo">Multin</h1>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bill">Bill</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inventry">Inventry</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="btns desktop-nav">
          <button className="sign">Sign up</button>
        </div>

        {/* Hamburger */}
        <div className="menu-icon" onClick={() => setOpen(true)}>
          <FaBars />
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        <FaTimes className="close-icon" onClick={() => setOpen(false)} />

        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/bill" onClick={() => setOpen(false)}>Bill</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/inventry" onClick={() => setOpen(false)}>Inventry</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>

        <button className="sign sidebar-btn">Sign up</button>
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="navContainer">
      <ul>
        <li className="nav-bar-item"><Link to='/'><img className="nav-img" src="../../../assets/home.png" alt="Home" /></Link></li>
        <li className="nav-bar-item"><Link to='/profile'><img className="nav-img" src="../../../assets/user.png" alt="User space" /></Link></li>
        <li className="nav-bar-item"><Link to='/categorieslist'><img className="nav-img" src="../../../assets/categorieslist.png" alt="Categories" /></Link></li>
        <li className="nav-bar-item"><Link to='/addexpense'><img className="nav-img" src="../../../assets/addexpense.png" alt="Add expense" /></Link></li>

      </ul>
    </nav>

  );
};

export default Nav;

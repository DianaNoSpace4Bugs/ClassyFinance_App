import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="navContainer">
      <ul>
        <li className="nav-bar-item"><Link to='/'><img src="../../../public/assets/home.png" alt="Home" /></Link></li>
        <li className="nav-bar-item"><Link to='/profile'><img src="../../../public/assets/user.png" alt="User space" /></Link></li>
        <li className="nav-bar-item"><Link to='/categorieslist'><img src="../../../public/assets/categorieslist.png" alt="Categories" /></Link></li>
        <li className="nav-bar-item"><Link to='/addexpense'><img src="../../../public/assets/addexpense.png" alt="Add expense" /></Link></li>

      </ul>
    </nav>

  );
};

export default Nav;

import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
  <ul className="nav-bar">
    <li><Link to='/'><img src="../../../public/assets/home.png" alt="Home" /></Link></li>
    <li><Link to='/profile'><img src="../../../public/assets/user.png" alt="User space" /></Link></li>
    <li><Link to='/categorieslist'><img src="../../../public/assets/categorieslist.png" alt="Categories" /></Link></li>
    <li><Link to='/addexpense'><img src="../../../public/assets/addexpense.png" alt="Add expense" /></Link></li>
    
  </ul>
</nav>

  );
};

export default Nav;

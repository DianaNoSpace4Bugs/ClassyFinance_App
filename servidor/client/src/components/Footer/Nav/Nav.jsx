import React from "react";

const Nav = () => {
  return (
    <nav>
  <ul className="nav-bar">
    <li><Link to='/'><img src="../../../public/assets/home.png" alt="Home" /></Link></li>
    <li><Link to='/profile'><img src="../../../public/assets/user.png" alt="User space" /></Link></li>
    <li><Link to='/statistics'><img src="../../../public/assets/statistics.png" alt="Statistics" /></Link></li>
    <li><Link to='/categorieslist'><img src="../../../public/assets/categorieslist.png" alt="Categories" /></Link></li>
    <li><Link to='/addexpense'><img src="../../../public/assets/addexpense.png" alt="Add expense" /></Link></li>
  </ul>
</nav>

  );
};

export default Nav;

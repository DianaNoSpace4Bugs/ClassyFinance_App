import React from "react";
import CategoriesList from "./CategoriesList/CategoriesList";
import ExpensesForm from "./ExpensesForm/ExpensesForm";
import Home from "./Home/Home";
import Statistics from "./Statistics/Statistics";
import UserProfile from "./UserProfile/UserProfile";

const Main = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<About/>} />
        <Route path="/statistics" element={<Statistics/>} />
        <Route path="/categorieslist" element={<CategoriesList/>} />
        <Route path="/addexpense" element={<ExpensesForm/>} />

        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default Main;

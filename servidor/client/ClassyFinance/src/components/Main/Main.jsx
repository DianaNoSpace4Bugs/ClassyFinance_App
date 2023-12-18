import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CategoriesList from "./CategoriesList/CategoriesList";
import ExpensesForm from "./ExpensesForm/ExpensesForm";
import Home from "./Home/Home";
import UserProfile from "./UserProfile/UserProfile";
import CategoryDetails from "./CategoryDetails/CategoryDetails";

const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/categorieslist" element={<CategoriesList />} />
          <Route path="/addexpense" element={<ExpensesForm />} />
          <Route path="/categorydetails" element={<CategoryDetails />} />

          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;

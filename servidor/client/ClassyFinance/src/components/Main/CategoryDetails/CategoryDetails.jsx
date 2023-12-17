import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategoryById } from "../../services/categoriesServices";
import { getExpenses } from "../../services/expensesServices";

const CategoryDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryData, setCategoryData] = useState()
  const [expensesList, setExpensesList] = useState([])

  function getCategoryId() {
    return searchParams.get("categoryId");
  }

  useEffect(() => {
    // Obtenemos la categoría por id
    getCategoryById(getCategoryId())
      .then(data => {
        console.log("getcategoryById: ", data);
        // lo que obtengo es un array de categorías. Me interesa solo la primera (solo viene una)
        setCategoryData(data[0]);
      })
      .catch(error => alert(error))
      // Obtenemos los gastos por el id de la categoría
      const filter = {
        categoryId: getCategoryId()
      };
      getExpenses(filter)
      .then(data => {
        console.log("getExpenses: ", data);
        setExpensesList(data);
      })
      .catch(error => alert(error))
  }, [])

  return (
    <section>
      <div>
        <h1>
          {categoryData?.name?.toUpperCase()}
        </h1>
        <img src={`/public/assets/categories/${categoryData?.name}.png`}
          alt={`Imagen de la categoría ${categoryData?.name}`} />
      </div>
      <ul>
        {/* TODO: añadir el resto de datos que me faltan */}
        {expensesList.length == 0 ? 'No hay ningún gasto.' : expensesList.map(expense => {
          return (
            <p key={expense.expense_id}>
              {expense.quantity}
            </p>);
        })}
      </ul>
    </section>
  );
};

export default CategoryDetails;

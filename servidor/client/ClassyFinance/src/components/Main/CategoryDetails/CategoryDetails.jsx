import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategoryById } from "../../services/categoriesServices";
import { getExpenses, deleteExpense } from "../../services/expensesServices";

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

  const handleClick = (event) => {
    console.log(event.target.id);
    const isConfirmed = confirm("Are you sure of deleting this expense?")
    if (isConfirmed){
      deleteExpense(event.target.id)
      .then(data => {
        // alert("This expense has been deleted successfully")
        let remainingExpenses = expensesList.filter(expense => Number(expense.expense_id) !== Number(data));
        setExpensesList(remainingExpenses);
      })
      .catch(error => alert(error))
    }
  }

  return (
    <section>
      <article>
        <img src={`/public/assets/categories/${categoryData?.name}.png`}
          alt={`Imagen de la categoría ${categoryData?.name}`} />
        <h1>
          {categoryData?.name?.toUpperCase()}
        </h1>
      </article>
      <ul>
        {/* TODO: añadir el resto de datos que me faltan */}
        {expensesList.length == 0 ? 'No hay ningún gasto.' : expensesList.map(expense => {
          return (
            <article key={expense.expense_id}>
              <p>{expense.quantity}</p>
              <p>{expense.description}</p>
              <button onClick={handleClick}>
                <img id={expense.expense_id} src="/public/assets/delete.png" alt="delete imagen" />
              </button>
            </article>);
        })}
      </ul>
    </section>
  );
};

export default CategoryDetails;

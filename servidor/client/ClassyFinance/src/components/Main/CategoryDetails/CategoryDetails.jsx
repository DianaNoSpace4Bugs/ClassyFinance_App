import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategoryById } from "../../services/categoriesServices";
import { getExpenses, deleteExpense } from "../../services/expensesServices";
import Swal from 'sweetalert2';

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
    const isConfirmed = Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    })
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
    <section id="seccionDetails">
      <article id="articleCategoria">
        <img src={`/assets/categories/${categoryData?.name}.png`}
          alt={`Imagen de la categoría ${categoryData?.name}`} />
        <h3>
          {categoryData?.name?.toUpperCase()}
        </h3>
      </article>
      <ul id="listaGastos">
        {/* Falta añadir el resto de datos que me faltan */}
        {expensesList.length == 0 ? 'No hay ningún gasto.' : expensesList.map(expense => {
          return (
            <article id="articleGasto" key={expense.expense_id}>
              <button onClick={handleClick}>
                <img id={expense.expense_id} src="/assets/delete.png" alt="delete imagen" />
              </button>
              <h3>{expense.quantity}</h3>
              <p>{expense.description}</p>
            </article>);
        })}
      </ul>
    </section>
  );
};

export default CategoryDetails;

import React, { useEffect, useState } from 'react';
import { createExpense } from '../../services/expensesServices';
import { getCategories } from '../../services/categoriesServices';
import Swal from 'sweetalert2';

const ExpensesForm = () => {

  const [categories, setCategories] = useState([]);
  const [formularioExpense, setFormularioExpense] = useState({
    quantity: '',
    description: '',
    date: '',
    is_monthly: false,
    user_id: '',
    category: '',

  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('event.target: ', event.target)
    const infoExpense = {
      quantity: event.target.quantity.value,
      description: event.target.description.value,
      date: new Date(),
      is_monthly: event.target.is_monthly.value,
      category: event.target.category.value
    }
    setFormularioExpense(infoExpense);
    console.log('Sending infoExpense: ', infoExpense)
    createExpense(infoExpense)
      .then(data => console.log("Expense (data): ", data))
      .catch(error => alert(error));
    Swal.fire({
      title: 'Your expense has been added successfully!',
      icon: 'success'
      // confirmButtonText: 'Aceptar',
    });
    // alert('Your expense has been added successfully!');
  }

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => alert(error));
  }, [])

  return (
    <>
      <h2 id='h2Expenses'>Insert a new expense</h2>
      <form id='formularioExpenses' onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="quantity">Quantity</label>
            
          <input type="number" name="quantity" />
        </fieldset>
        <fieldset>
          <label htmlFor="description">Description (optional)</label>
            
          <input type="text" name="description" />
        </fieldset>
        <fieldset>
          <label htmlFor="is_monthly">Check is it's a fixed monthly expense</label>
          <input type="checkbox" name="is_monthly" />
        </fieldset>
        <fieldset>
          <label htmlFor="category">Category</label>
            
          <select id="category">
            <option value="" disabled>Select an option</option>
            {categories.map((option) => (
              <option key={option.category_id} value={option.category_id}>
                {option.name}
              </option>
            ))}
          </select>
        </fieldset>
        <br />
        <button id='botonFormularioExpenses'>Add expense</button>
      </form>
    </>
  );
};

export default ExpensesForm;

import React, { useState } from 'react';
import { createExpense } from '../../services/expensesServices';

const ExpensesForm = () => {
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
      .then(data => console.log("Expense register (data): ", data))
      .catch(error => alert(error));
    console.log('Formulario enviado!');
  }

  return (
    <>
      <h2>Insert a new expense</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="quantity">Quantity</label>
          <br />
          <input type="number" name="quantity" />
        </fieldset>
        <fieldset>
          <label htmlFor="description">Description (optional)</label>
          <br />
          <input type="text" name="description" />
        </fieldset>
        <fieldset>
          <label htmlFor="is_monthly">Check is it's a fixed monthly expense</label>
          <input type="checkbox" name="is_monthly" />
        </fieldset>
        <fieldset>
          <label htmlFor="category">Category</label>
          <br />
          <select name="category" multiple>
            <option value="category1">category1</option>
            <option value="category2">category2</option>
            <option value="category3">category3</option>
            <option value="category4">category4</option>
            <option value="category5">category5</option>
          </select>
        </fieldset>
        <br />
        <button>Add expense</button>
      </form>
    </>
  );
};

export default ExpensesForm;

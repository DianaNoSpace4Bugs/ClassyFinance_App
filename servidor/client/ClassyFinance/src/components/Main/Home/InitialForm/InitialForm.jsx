import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../../services/usersService';
import Swal from 'sweetalert2';


const InitialForm = () => {
  const navigate = useNavigate()
  const [formulario, setFormulario] = useState({
    username: '',
    email: '',
    password: '',
    moneyLimit: '',
    monthlyIncome: '',
    category1: '',
    category2: '',
    category3: '',
    category4: '',
    category5: ''
  })
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('event.target: ', event.target)
    const infoUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      money_limit: event.target.moneyLimit.value,
      monthlyIncomeQuantity: event.target.monthlyIncome.value,
      quantityMonthlyCategory1Expense: event.target.category1.value,
      quantityMonthlyCategory2Expense: event.target.category2.value,
      quantityMonthlyCategory3Expense: event.target.category3.value,
      quantityMonthlyCategory4Expense: event.target.category4.value,
      quantityMonthlyCategory5Expense: event.target.category5.value
    }
    setFormulario(infoUser);
    console.log('Sending infoUser: ', infoUser)
    createUser(infoUser)
      .then(response => console.log("User register (data): ", response.data))
      .catch(error => alert(error));
    console.log('Formulario enviado!');
    if (infoUser.username && infoUser.email && infoUser.password && infoUser.money_limit && infoUser.monthlyIncomeQuantity) {
      navigate('/categorieslist')
    }
    else{
      Swal.fire({
        title: 'Error',
        text: 'Required fields are not filled or incorrect',
        icon: 'error',
        confirmButtonText: 'Back to the form',
        showCancelButton: false, // Oculta el botón de Cancelar
      });
    }
  }

  const handleChange = (e) => {
    // Actualizar el estado del formulario mientras el usuario escribe
    setFormulario({
      ...formulario,
      [e.target.username]: e.target.value,
    });
  };

  return (<>
    <h2 id='welcome'>Welcome!</h2>
    <h3 id='subtitulo'>Please enter your information to access the application</h3>
    <form id='initialForm' onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={handleChange}/>
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email</label>
         
        <input type="email" name="email" onChange={handleChange}/>
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
         
        <input type="password" name="password" onChange={handleChange}/>
      </fieldset>
      <fieldset>
        <label htmlFor="moneyLimit">Set a spending limit</label>
         
        <input type="number" name="moneyLimit" onChange={handleChange}/>
      </fieldset>
      <fieldset>
        <label htmlFor="monthlyIncome">What is your fixed monthly income?</label>
         
        <input type="number" name="monthlyIncome" onChange={handleChange}/>
      </fieldset>
      <fieldset id='fieldsetRaro'>
        <h4>If you have any fixed monthly expense in any of the corresponding categories, please enter the amount.</h4>
         
        <br />
        <label htmlFor="category1">Bills</label>
        <br />
        <input type="number" name="category1" onChange={handleChange}/>
        <br />

        <label htmlFor="category2">Transport</label>
        <br />
        <input type="number" name="category2" onChange={handleChange}/>
         
        <br />
        <label htmlFor="category3">Entertainment</label>
        <br />
        <input type="number" name="category3" onChange={handleChange}/>
         
        <br />
        <label htmlFor="category4">Shopping</label>
        <br />
        <input type="number" name="category4" onChange={handleChange}/>
        <br />

        <label htmlFor="category5">Grocery</label>
        <br />
        <input type="number" name="category5" onChange={handleChange}/>
      </fieldset>
      <br />

      <button id='botonInitialForm' type="submit">Access</button>
    </form>
  </>);
};

export default InitialForm;

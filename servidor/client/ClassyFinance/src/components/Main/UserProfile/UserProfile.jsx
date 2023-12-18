import React, { useState, useEffect } from "react";
import { getUserById } from "../../services/usersService";

const UserProfile = () => {
  const [perfil, setPerfil] = useState()


  useEffect(() => {
    // Obtenemos la categoría por id
    // ToDo: como no hay autenticación paso el primer id disponible
    // habrá que hacer un getUserInfo que obtenga la información del usuario loggeado
    getUserById(1)
      .then(data => {
        console.log("useeffect : getUserById: ", data);
        // lo que obtengo es un array de categorías. Me interesa solo la primera (solo viene una)
        setPerfil(data[0]);
      })
      .catch(error => alert(error))
  }, []);


  return (
    <>
      <section id="perfilUsuario">
        <img src="https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804_1280.png" alt="imagen de perfil de usuario" />

        <article>
          <h3>Username:</h3>
          <p>{perfil?.username}</p>
        </article>

        <article>
          <h3>Email:</h3>
          <p>{perfil?.email}</p>
        </article>

        <article>
          <h3>Your actual money limit is:</h3>
          <p>{perfil?.money_limit}</p>
        </article>

      </section>
    </>);
};

export default UserProfile;

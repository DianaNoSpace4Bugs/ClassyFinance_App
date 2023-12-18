import React, { useState, useEffect } from "react";
import { getUserById } from "../../services/usersService";

const UserProfile = () => {
  const [perfil, setPerfil] = useState()

  
  useEffect(() => {
    // Obtenemos la categoría por id
    getUserById(getUserById())
      .then(data => {
        console.log("getUserById: ", data);
        // lo que obtengo es un array de categorías. Me interesa solo la primera (solo viene una)
        setPerfil(data[0]);
      })
      .catch(error => alert(error))
  }, [])
  
  return (
  <>
  <section id="perfilUsuario">

  </section>
  </>);
};

export default UserProfile;

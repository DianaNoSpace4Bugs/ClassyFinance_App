import React, { useState } from 'react';
import InitialForm from "./InitialForm/InitialForm";

const Home = () => {
  const [formData, setFormData] = useState({});

  const clearData = () => {
    setData({});
  }

  return (<>
      <InitialForm />
  </>);
}

export default Home;

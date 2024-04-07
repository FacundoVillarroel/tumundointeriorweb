import React, { useState } from "react";

const LoginForm = ({ handleLogin }) => {
  const [values, setValues] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values.username, values.password);
    setValues({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="loginFormContainer">
      <div className="formRow">
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="formRow">
        <label htmlFor="username">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
      </div>
      <input className="loginButton" type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;

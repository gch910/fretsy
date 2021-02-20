import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  //redirect if they are trying to access login page
  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const user = {
      credential,
      password,
    };

    return dispatch(login(user)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  const handleDemoSubmit = () => {
    return dispatch(login({credential: "Demo-lition", password: "password"}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul className="form-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className="form-div">
        <div id="login-input-div">
          <label className="form-label">
            Username or Email
            <input
              className="form-input"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className="form-label">
            Password
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="form-button">
            <button type="submit">Log in</button>
            <button type="button" onClick={handleDemoSubmit}>Demo</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginFormPage;

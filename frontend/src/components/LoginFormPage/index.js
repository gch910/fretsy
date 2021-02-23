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
    return dispatch(login({ credential: "Demo-lition", password: "password" }));
  };

  return (
    <>
      <form className="login-page banner-1" onSubmit={handleSubmit}>
        <ul className="form-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <h1 id="form-h1">Log In</h1>
        <input
          className="form-input no-outline"
          id="form-credential"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder="Username or Email"
          required
        />
        <input
          className="form-input no-outline"
          id="form-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Username or Email"
          required
        />
        <div className="form-button-div">
          <button className="no-outline" id="login-submit-button" type="submit">
            Log in
          </button>
          <button className="no-outline" id="demo-button" type="button" onClick={handleDemoSubmit}>
            Demo
          </button>
        </div>
      </form>
      <div className="banner-2">
        <h1>2</h1>
      </div>
      <div className="banner-3">
        <h1>3</h1>
      </div>
      <div className="banner-4">
        <h1>4</h1>
      </div>
      <div className="banner-5">
        <h1>5</h1>
      </div>
      <div className="banner-6">
        <h1>6</h1>
      </div>
      <div className="banner-7">
        <h1>7</h1>
      </div>
      <div className="banner-8">
        <h1>8</h1>
      </div>
      <div className="banner-9">
        <h1>9</h1>
      </div>
    </>
  );
};

export default LoginFormPage;

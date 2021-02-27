import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Banner1Categories from "../HomePage/Banner1Categories";
import Banner3Categories from "../HomePage/Banner1Categories";
import Banner5Categories from "../HomePage/Banner1Categories";

const LoginHome = ({ categoryValues }) => {
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
    <form className="login-page-banner-1" onSubmit={handleSubmit}>
      <ul className="form-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      {categoryValues.map((category, idx) => (
          <div className="banner-img-div" id={`login-img${idx}`}>
            <img
              id="login-banner-img"
              src={category.img}
            ></img>
            <h3 className="banner-img-text">{category.name}</h3>
          </div>
      ))}
      {/* <div className="banner1-img-div">
        <img
          className="banner1-img"
          src="https://images.reverb.com/image/upload/s--ji_-4M-n--/f_auto,t_supersize/v1552861911/jwvuegzmrim71w639rol.jpg"
        ></img>
      </div>
      <div className="banner-img-text" id="banner-text-1">
        Hello
      </div>
      <div className="banner1-img-div" id="banner1-img2">
        <img
          className="banner1-img"
          src="https://images.reverb.com/image/upload/s--ji_-4M-n--/f_auto,t_supersize/v1552861911/jwvuegzmrim71w639rol.jpg"
        ></img>
      </div>
      <div className="banner-img-text" id="banner-text-2">
        Goodbye
      </div> */}
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
        <button
          className="no-outline"
          id="demo-button"
          type="button"
          onClick={handleDemoSubmit}
        >
          Demo
        </button>
      </div>
    </form>
  );
};

export default LoginHome;

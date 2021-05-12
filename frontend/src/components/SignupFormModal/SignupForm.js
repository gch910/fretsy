import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../store/session";
import "./SignupForm.css";



const SignupForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState([]);
  
    //redirect if they are trying to access login page
    if (sessionUser) return <Redirect to="/" />;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        setErrors([]);
  
        const user = {
          email,
          password,
          username,
        };
  
        return dispatch(signup(user)).catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
      }
      return setErrors([
        "Passwords Must Match",
      ]);
    };
  
    return (
      <form className="signup-page" onSubmit={handleSubmit}>
        <ul className="form-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
          <h1 id="signup-form-h1">Sign Up</h1>
          <input
            className="form-input no-outline"
            id="signup-form-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
            <input
              className="form-input no-outline"
              id="signup-form-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              className="form-input no-outline"
              id="signup-form-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <input
              className="form-input no-outline"
              id="signup-form-confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          <div className="form-button form-button-div">
            <button className="no-outline" id="signup-submit-button" type="submit">
              Sign Up
            </button>
          </div>
      </form>
    );
  };
  
  export default SignupForm;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import './LoginScreen.css';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [currentView, setCurrentView] = useState("signUp");

  const [UserName, setUserName] = useState("");

  const [Email, setEmail] = useState("");

  const [Password, setPassword] = useState("");

  const [LoginUserName, setLoginUserName] = useState("");

  const [LoginPassword, setLoginPassword] = useState("");

  const changeView = (view) => {
    setCurrentView(view);
  }

  const handleSubmit = (e) => {
    
    dispatch( startRegister( UserName, Email, Password ) );
    setUserName("");
    setEmail("");
    setPassword("");
    e.preventDefault();
  }

  const handleLoginSubmit = (e) => {
    
    dispatch( startLogin( LoginUserName, LoginPassword ));
    e.preventDefault();
  }

  const showCurrentView = () => {
    switch(currentView) {
      case "signUp":
        return (
          
          <form onSubmit={handleSubmit}>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label>Username:</label>
                  <input onChange={ (e) => setUserName(e.target.value) } value={UserName} type="text" id="username" required/>
                </li>
                <li>
                  <label>Email:</label>
                  <input onChange={ (e) => setEmail(e.target.value) } value={Email} type="email" id="email" required/>
                </li>
                <li>
                  <label>Password:</label>
                  <input onChange={ (e) => setPassword(e.target.value) } value={Password} type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={ () => changeView("logIn")}>Have an Account?</button>
          </form>
        )
        
      case "logIn":
        return (
          <form onSubmit={handleLoginSubmit}>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label>Username:</label>
                  <input onChange={ (e) => setLoginUserName(e.target.value) } value={LoginUserName} type="text" id="username" required/>
                </li>
                <li>
                  <label>Password:</label>
                  <input onChange={ (e) => setLoginPassword(e.target.value) } value={LoginPassword} type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                  <a onClick={ () => changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={ () => changeView("signUp")}>Create an Account</button>
          </form>
        )
        
      case "PWReset":
        return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label>Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => changeView("logIn")}>Go Back</button>
        </form>
       
        )
      default:
        break
    }
  }


  
    return (
      <section id="entry-page">
        {showCurrentView()}
      </section>
    )
  
}
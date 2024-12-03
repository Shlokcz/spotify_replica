import React, { useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    let response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers:{
        "Content-Type": "application/json"
      }
    })
    response = await response.json();
    console.warn(response);

    const data = {email, password};
    localStorage.setItem("user", JSON.stringify(data));
    
    if(response){
      navigate("/");
    }
  }

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginForm}>
        <div className={styles.heading}>
          <img src="/images/logo.png" alt="error-404" />
          <h1>Log in to Spotify</h1>
        </div>
        <div className={styles.username}>
          <h6>Email</h6>
          <input type="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className={styles.password}>
          <h6>Password</h6>
          <input type="text" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}/>
          {/* <img src="/images/view.png" alt="error-404" /> */}
        </div>
        <div className={styles.loginBtn}>
          <button onClick={handleLogin}>Log In</button>
          <button onClick={handleGoBack}>Go Back</button>
        </div>
        <div className={styles.forgotPass}>
          <h5>Forgot your password?</h5>
          <div className={styles.accountCreation}>
            <p>Dont have an account?</p> 
            <h5>Sign up for Spotify</h5>
          </div>
        </div>
      </div>

      <div className={styles.loginFooter}>
        <h5>This site is protected by <span>Mr. Shlok Gupta</span> and <span>Terms of service</span> apply.</h5>
      </div>
    </div>
  );
};

export default Login;

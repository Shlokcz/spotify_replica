import React, { useState } from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesignup = async () => {
    let response = await fetch("http://localhost:5000/signup", {
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
    // navigate("/");
  }

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className={styles.signup}>
      <div className={styles.signupForm}>
        <div className={styles.heading}>
          <img src="/images/logo.png" alt="error-404" />
          <h1>Sign up to</h1>
          <h1>start Listening</h1>
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
        <div className={styles.signupBtn}>
          <button onClick={handlesignup} className={styles.signupbutton}>Sign up</button>
          <button onClick={handleGoBack} className={styles.gobackbutton}>Go Back</button>
        </div>
        <div className={styles.forgotPass}>
          <div className={styles.accountCreation}>
            <p>Already have an Account?</p> 
            <h5>Log in here</h5>
          </div>
        </div>
      </div>

      <div className={styles.signupFooter}>
        <h5>This site is protected by <span>Mr. Shlok Gupta</span> and <span>Terms of service</span> apply.</h5>
      </div>
    </div>
  );
};

export default Signup;

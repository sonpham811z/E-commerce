import React, { useState } from "react";
import './CSS/LoginSignup.css'

const LoginSignup = () => {

    const [state,setState] = useState("Sign up")
    const [formData,setFormData] = useState({
        username: "",
        password:"",
        email: ""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Login function called", formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>{
            responseData = data
        })
        
        if(responseData.success){
            localStorage.setItem('authToken',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors);
            
        }
    }

    const singup = async ()=>{
        console.log("Sign up function called",formData);
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>{
            responseData = data
        })
        
        if(responseData.success){
            localStorage.setItem('authToken',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors);
            
        }
        
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>

                <div className="loginsignup-fields">
                    {state === "Sign up" ?<input value={formData.username} name="username" onChange={changeHandler} type="text" placeholder="Your Name" /> : <></>}
                    <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
                    <input name="password" value={formData.password} onChange={changeHandler} className="loginsignup-password" type="password" placeholder="Password" />
                </div>

                <button onClick={() => {state === "Sign up" ? singup() : login()}}>Continue</button>
                {state === "Sign up" ? <p  className="loginsignup-login">Already have an account?<span onClick={() => setState("Login")}>Login here</span></p> 
                : <p  className="loginsignup-login">Create an account?<span onClick={() => setState("Sign up")}>Click here</span></p>}
                <div className="loginsingup-agree">
                    <input type="checkbox" name='' id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
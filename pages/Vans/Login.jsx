import React from "react";
import {useState, useNavigate} from "react-router-dom";

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form>
                <input 
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button>Log in</button>
            </form>
        </div>
    )

}

import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
    const location = useLocation()
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                setError(err)
            })
            .finally( () => setStatus("idle") )
    }

    console.log(status)

    function handleChange(e){
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const displayLoginMessage = location?.state // checks if state exists (or if state = null)
        ? <h3 className="login-first">{location.state.message}</h3>
        : ""

    return (
        <div className="login-container">

            {displayLoginMessage}

            {error && <h3 className="error">{error.message}</h3>}

            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input 
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                />
                <input 
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                />
                <button>Log in</button>
            </form>
        </div>
    )

}

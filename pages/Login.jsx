import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from || "/host"

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                localStorage.setItem("loggedin", true)
                setError(null)
                navigate(from, { replace: true})
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
        ? <h3 className="login-error">{location.state.message}</h3>
        : ""

    return (
        <div className="login-container">

            {
                location.state?.message &&
                    <h3 className="login-error">{location.state.message}</h3>
            }

            <h1>Sign in to your account</h1>

            {
                error?.message && 
                    <h3 className="login-error">{error.message}</h3>
            }

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
                {status === "submitting" 
                    ? <button disabled>Logging in...</button> 
                    : <button>Log in</button>}
            </form>
        </div>
    )

}

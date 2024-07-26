import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../button/Button";
import validate from "../../validation/formValidation";

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate({ email, password })
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log(` Email: ${email}, Password: ${password}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "12px" }}>
                <label>Email</label>
                <br />
                <input
                    type="email"
                    value={email}
                    placeholder="email@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="errorMessage">{errors.email}</span>}
            </div>
            <div style={{ marginBottom: "12px" }}>
                <label>Password</label>
                <br />
                <input
                    type="password"
                    value={password}
                    placeholder="********"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span className="errorMessage">{errors.password}</span>}
            </div>
            <div>
                <input type="checkbox" id="saveLogin" name="saveLogin" value="saveLogin" />
                <label htmlFor="saveLogin" style={{ fontWeight: "400" }}>Remember Me</label>
            </div>
            <div style={{ margin: "5px 0 10px 0" }}>
                <Button
                    title="Submit"
                    type="submit"
                    bgColor="dark"
                    hoverColor="blue"
                    style={{ width: '100%', borderRadius: "18px", margin: "10px 0", height: "28px", padding: "0" }}
                />
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-evenly", gap: "10px", fontSize: "14px", fontWeight: "500" }}>
                    <a href="/logIn">Forgot password?</a>
                    <Link to="/signUp">Create an Account</Link>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;
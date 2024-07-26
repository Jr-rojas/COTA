import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import Button from "../button/Button";
import accountValidate, { validatePassword } from "../../validation/signUpValidation";

import "../../css/error.css";

function SignUpForm() {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({})

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        const newErrors = validatePassword(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: newErrors.password,
        }));
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setconfirmPassword(value);
        const newErrors = accountValidate({ password, confirmPassword: value });
        setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: newErrors.confirmPassword
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = accountValidate({ firstName, lastName, email, password, confirmPassword })
        setErrors(validationErrors);
        console.log(errors)
        if (Object.keys(validationErrors).length === 0) {
            console.log(` First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: "12px" }}>
                <div style={{ marginRight: "5px", paddingRight: "5px" }}>
                    <label htmlFor="firstName">First Name</label>
                    <br />
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        placeholder="John"
                        onChange={(e) => setfirstName(e.target.value)}
                        className={errors.firstName ? "error" : ""}
                    />
                    {errors.firstName && <span className="errorMessage">{errors.firstName}</span>}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <br />
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        placeholder="Doe"
                        onChange={(e) => setlastName(e.target.value)}
                        className={errors.lastName ? "error" : ""}
                    />
                    {errors.lastName && <span className="errorMessage">{errors.lastName}</span>}
                </div>
            </div>
            <div style={{ marginBottom: "12px" }}>
                <label htmlFor="email">Email</label>
                <br />
                <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="email@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="errorMessage">{errors.email}</span>}
            </div>
            <div style={{ marginBottom: "12px" }}>
                <label htmlFor="password">Create Password</label>
                <br />
                <ul style={{ fontSize: "14px" }}>
                    <li>Must contain at least one number</li>
                    <li>Must be atleast 6 characters long</li>
                    <li>Must contain atleast one Capital letter</li>
                </ul>
                <div style={{ position: "relative" }}>
                    <input
                        id="password"
                        type={passwordVisible ? "text" : "password"}
                        value={password}
                        placeholder="Create Password"
                        onChange={handlePasswordChange}
                        className={errors.password ? "error" : ""}
                    />
                    <FontAwesomeIcon
                        icon={passwordVisible ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        className="passwordToggleIcon"
                        style={{ position: "absolute", right: 10, top: 10, cursor: "pointer" }}
                    />
                </div>
                {errors.password && <span className="errorMessage">{errors.password}</span>}
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <br />
                <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm password"
                    onChange={handleConfirmPasswordChange}
                    className={errors.confirmPassword ? "error" : ""}
                />
                {errors.confirmPassword && <span className="errorMessage">{errors.confirmPassword}</span>}
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
                    <Link to="/logIn">Log In</Link>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm;
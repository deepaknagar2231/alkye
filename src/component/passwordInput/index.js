import React, { useState } from 'react';
import './style.scss';

function PasswordInput({ value, handleChange, name }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="password-input-container">
            <input
                type={showPassword ? "text" : "password"}
                id="password-input"
                className="password-input"
                name={name}
                value={value}
                onChange={handleChange}
                placeholder='Enter your password'
            />
            <button
                type="button"
                onClick={togglePassword}
                className="toggle-password-button"
            >
                <span className="toggle-password-icon" title={showPassword ? "hide" : "show"}>
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                </span>
            </button>
        </div>
    );
}

export default PasswordInput;
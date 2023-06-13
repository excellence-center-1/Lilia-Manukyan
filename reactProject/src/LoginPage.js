import React, { useState } from 'react';

const LoginPage = ({ setIsLoggedIn, setIsSignedUp }) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleSignUpClick = () => {
setIsSignedUp(true);
};

const isEmailValid = (email) => {
const emailRegex = /^[^@\s\t\r\n]+@[^@\s\t\r\n]+\.[^@\s\t\r\n]/;
return emailRegex.test(email);
};

const isPasswordValid = (password) => {
const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-]).{6,}/;
return passwordRegex.test(password);
};

const handleSubmit = (event) => {
event.preventDefault();

if (isEmailValid(email) && isPasswordValid(password)) {
// Email and password are valid, proceed with login logic
setIsLoggedIn(true);
} else {
// Email or password is not valid
if (!isEmailValid(email)) {
setEmailError('Invalid email');
} else {
setEmailError('');
}
if (!isPasswordValid(password)) {
setPasswordError('Invalid password');
} else {
setPasswordError('');
}
}
};

return (
<div className="login-page">
<div className="login-container">
<h2 className="login-header">Log In to Facebook</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<input
type="email"
placeholder="Email address"
value={email}
onChange={handleEmailChange}
className="form-input"
required
/>
{emailError && <p className="error-message">{emailError}</p>}
</div>
<div className="form-group">
<input
type="password"
placeholder="Password"
value={password}
onChange={handlePasswordChange}
className="form-input"
required
/>
{passwordError && <p className="error-message">{passwordError}</p>}
</div>
<button type="submit" className="login-button">Log In</button>
<p className="signup-link" onClick={handleSignUpClick}>
Create New Account
</p>
</form>
</div>
</div>
);
};

export default LoginPage;


import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SignUpPage = ({ setIsLoggedIn, setIsSignedUp }) => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [birthDate, setBirthDate] = useState(null);
const [error, setError] = useState('');

const handleFirstNameChange = (event) => {
setFirstName(event.target.value);
};

const handleLastNameChange = (event) => {
setLastName(event.target.value);
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleLoginClick = () => {
setIsSignedUp(false);
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
// Email and password are valid, proceed with sign-up logic
setIsLoggedIn(true);
} else {
// Email or password is not valid
setError('Email or password is not valid');
}
};

return (
<div className="signup-page">
<div className="signup-container">
<h2 className="signup-header">Sign Up</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<input
type="text"
placeholder="First Name"
value={firstName}
onChange={handleFirstNameChange}
className="form-input"
required
/>
</div>
<div className="form-group">
<input
type="text"
placeholder="Last Name"
value={lastName}
onChange={handleLastNameChange}
className="form-input"
required
/>
</div>
<div className="form-group">
<input
type="email"
placeholder="Email address"
value={email}
onChange={handleEmailChange}
className="form-input"
required
/>
</div>
<div className="form-group">
<input
type="password"
placeholder="New password"
value={password}
onChange={handlePasswordChange}
className="form-input"
required
/>
</div>
<div className="form-group">
<label className="form-label">Birthdate</label>
<DatePicker
selected={birthDate}
onChange={(date) => setBirthDate(date)}
className="form-datepicker"
dateFormat="dd/MM/yyyy"
maxDate={new Date()}
showYearDropdown
scrollableYearDropdown
yearDropdownItemNumber={100}
placeholderText="Select Birthdate"
required
/>
</div>
<button type="submit" className="signup-button">Sign Up</button>
<p className="login-link" onClick={handleLoginClick}>
Already have an account? Log In
</p>
{error && <p className="error-message">{error}</p>}
</form>
</div>
</div>
);
};

export default SignUpPage;

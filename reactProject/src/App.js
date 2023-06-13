import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';

const App = () => {
const [isSignedUp, setIsSignedUp] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);

return (
<div>
{isLoggedIn ? (
<HomePage />
) : isSignedUp ? (
<SignUpPage setIsLoggedIn={setIsLoggedIn} setIsSignedUp={setIsSignedUp} />
) : (
<LoginPage setIsLoggedIn={setIsLoggedIn} setIsSignedUp={setIsSignedUp} />
)}
</div>
);
};

export default App;
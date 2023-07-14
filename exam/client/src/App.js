import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Todo from './Todo';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleButtonClick = () => {
    setCurrentPage(currentPage === 'login' ? 'signup' : 'login');
  };

  const handleLoginSuccess = () => {
    setCurrentPage('todo');
  };

  return (
     <div className="container">
      {currentPage === 'login' && <LoginPage onLoginSuccess={handleLoginSuccess} />}
      {currentPage === 'signup' && <SignupPage />}
      {currentPage === 'todo' && <Todo />}
      {currentPage !== 'todo' && (
        <button className="redirect_button" onClick={handleButtonClick}>
          {currentPage === 'login' ? 'Go to Signup' : 'Go to Login'}
        </button>
      )}
     </div> 
  );
};


// import React from 'react';
// import GamePage from './GamePage';
// import SignupPage from './SignupPage';
// import LoginPage from './LoginPage';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/signup" component={SignupPage} />
//         <Route exact path="/login" component={LoginPage} />
//         {/* Other routes */}
//       </Switch>
//     </Router>
//   );
// };

export default App;

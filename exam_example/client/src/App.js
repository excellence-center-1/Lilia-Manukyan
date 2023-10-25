import './App.css';
import Register from './Register';
import { Login } from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Todo';
// import Todo from './Todo';

function App() {
  return (

    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Todo' element={<Todo />} /> 
            {/* <Route path='/todo' element={<Todo />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
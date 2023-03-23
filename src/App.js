
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login  from './pages/Login';
import  Dashboard  from './pages/Dashboard';
import Register from './pages/Register';
function App() {
  return (

    <BrowserRouter> 
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />



    </Routes>
    </BrowserRouter>

  )

}


export default App;

import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import Dashboard2 from "./Component/Admin/dashboard/Dashboard2"
import ForgotPassword from './Component/Login/ForgotPassword';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>

      {/* admin path */}
      <Route path='/adashboard' element={<Dashboard2/>}/>

    </Routes>
  );
}

export default App;

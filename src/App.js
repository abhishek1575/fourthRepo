import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import Dashboard2 from "./Component/Admin/dashboard/Dashboard2"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      {/* admin path */}
      <Route path='/adashboard' element={<Dashboard2/>}/>
    </Routes>
  );
}

export default App;

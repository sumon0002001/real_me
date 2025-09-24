import {BrowserRouter, Routes, Route,} from 'react-router'
import { Navigate } from 'react-router'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Checkstatus from './pages/chechstatus'
import { useState } from 'react';
import RefrshHandler from './RefreshHandler';


const App = () => {
 
const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/realme" />
  }
  return (
      <BrowserRouter>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/realme' element={<Login />}></Route>
        <Route path='/visaview' element={<PrivateRoute element={<Checkstatus />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Checkstatus from './pages/chechstatus'

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/realme' element={<Login />}></Route>
         <Route path='/visaview' element={<Checkstatus />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
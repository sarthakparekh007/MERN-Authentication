import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import Signup from './pages/SignUp'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute';
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

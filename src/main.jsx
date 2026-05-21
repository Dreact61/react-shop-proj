import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router' 
import SignInForm from './other-pages/sign-in.jsx'
import Register from './other-pages/register'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />

        <Route path='/sign-in' element={<SignInForm />}>
          <Route path='/sign-in/register' element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

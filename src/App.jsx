import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/SignIn'
import SignupPage from './pages/SignUp'
import ForgotPassword from './components/ForgotPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App

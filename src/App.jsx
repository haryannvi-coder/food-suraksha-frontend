import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import {Hotels} from './pages/Hotels'
import { Home } from './pages/Home'
import { Layout } from './Layout'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/hotel/:id" element={<Hotels />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App

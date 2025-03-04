import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Hotel1 } from './pages/Hotel1'
import { Hotel2 } from './pages/Hotel2'
import { Hotel3 } from './pages/Hotel3'
import { Home } from './pages/Home'
import { Layout } from './Layout'


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/hotel/:id" element={<Hotel1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App

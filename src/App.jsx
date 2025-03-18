import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AllHotelsGalleryDashboard } from './pages/AllHotelsGalleryDashboard'
import { HotelGallery } from './pages/HotelGallery'
import { Home } from './pages/Home'
import { Layout } from './Layout'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { MinisterDashboard } from './pages/MinisterDashboard'
import { FsoDashboard } from './pages/FsoDashboard'
import { Alerts } from './pages/Alerts'
import { HotelDetail } from './pages/HotelDetail'
import { KeralaMap } from './pages/KeralaMap'
import { Dummy } from './pages/Dummy'
import { Logout } from './pages/Logout'
import {AddHotel} from './pages/AddHotel'

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="ministerdashboard" element = {<MinisterDashboard />} />
          <Route path="fsodashboard" element = {<FsoDashboard />} />
          <Route path="alerts" element = {<Alerts />} />
          <Route path="hoteldetails/:id" element={<HotelDetail />} />
          <Route path="keralamap" element={<KeralaMap />} />
          <Route path="hotelgallery/:id" element={<HotelGallery />} />
          <Route path="allhotelsgallerydashboard" element={<AllHotelsGalleryDashboard />} />
          <Route path="dummy" element={<Dummy />} /> 
          <Route path="logout" element={<Logout />} />
          <Route path="addHotel" element={<AddHotel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App

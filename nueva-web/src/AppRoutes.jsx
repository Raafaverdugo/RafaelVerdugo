import { Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import AppointDate from './pages/AppointDate.jsx'

// Rutas compartidas entre el cliente (main.jsx) y el pre-renderizado (entry-server.jsx)
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AppointDate" element={<AppointDate />} />
    </Routes>
  )
}

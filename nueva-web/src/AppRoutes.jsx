import { Routes, Route } from 'react-router-dom'
import { routes } from './routes.jsx'

// Rutas compartidas entre el cliente (main.jsx) y el pre-renderizado (entry-server.jsx)
export default function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { EventDashboard } from './pages/event-dashboard'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/event-dashboard" element={<EventDashboard />} />
    </Routes>
  )
}

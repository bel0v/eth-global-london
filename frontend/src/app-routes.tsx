import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { EventDashboard } from './pages/event-dashboard'
import { HomeLayout } from './components/home-layout'
import { FanLayout } from './components/fan-layout'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
      />
      <Route
        path="/event-dashboard"
        element={
          <FanLayout>
            <EventDashboard />
          </FanLayout>
        }
      />
    </Routes>
  )
}

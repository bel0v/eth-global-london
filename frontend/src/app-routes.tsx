import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { EventDashboard } from './pages/event-dashboard'
import { HomeLayout } from './components/home-layout'
import { FanLayout } from './components/fan-layout'
import { EventPage } from './pages/event-page'

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
        path="/event-dashboard/*"
        element={
          <Routes>
            <Route
              index
              element={
                <FanLayout>
                  <EventDashboard />
                </FanLayout>
              }
            />
            <Route
              path="/:eventId"
              element={
                <FanLayout>
                  <EventPage />
                </FanLayout>
              }
            />
          </Routes>
        }
      />
    </Routes>
  )
}

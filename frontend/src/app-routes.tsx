import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { EventDashboard } from './pages/event-dashboard'
import { HomeLayout } from './components/home-layout'
import { FanLayout } from './components/fan-layout'
import { EventPage } from './pages/event-page'
import { BountyPage } from './pages/bounty-page'
import { MomentorDashboard } from './pages/momentor-dashboard'
import { MomentorRecap } from './pages/momentor-recap'

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
              path="/:eventId/*"
              element={
                <Routes>
                  <Route
                    index
                    element={
                      <FanLayout>
                        <EventPage />
                      </FanLayout>
                    }
                  />
                  <Route
                    path="/:bountyId"
                    element={
                      <FanLayout>
                        <BountyPage />
                      </FanLayout>
                    }
                  />
                </Routes>
              }
            />
          </Routes>
        }
      />
      <Route
        path="/momentor-dashboard"
        element={
          <FanLayout>
            <MomentorDashboard />
          </FanLayout>
        }
      />
      <Route
        path="/momentor-recap"
        element={
          <FanLayout>
            <MomentorRecap />
          </FanLayout>
        }
      />
    </Routes>
  )
}

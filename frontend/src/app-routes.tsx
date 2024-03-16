import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { EventDashboard } from './pages/event-dashboard'
import { HomeLayout } from './components/home-layout'
import { UserLayout } from './components/user-layout'
import { EventPage } from './pages/event-page'
import { BountyPage } from './pages/bounty-page'
import { MomentorDashboard } from './pages/momentor-dashboard'
import { MomentorRecap } from './pages/momentor-recap'
import { CreateBountyPage } from './pages/create-bounty-page'

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
                <UserLayout>
                  <EventDashboard />
                </UserLayout>
              }
            />
            <Route
              path="/:eventId/*"
              element={
                <Routes>
                  <Route
                    index
                    element={
                      <UserLayout>
                        <EventPage />
                      </UserLayout>
                    }
                  />
                  <Route
                    path="/:bountyId"
                    element={
                      <UserLayout>
                        <BountyPage />
                      </UserLayout>
                    }
                  />
                  <Route
                    path="/create-bounty"
                    element={
                      <UserLayout>
                        <CreateBountyPage />
                      </UserLayout>
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
          <UserLayout>
            <MomentorDashboard />
          </UserLayout>
        }
      />
      <Route
        path="/momentor-recap"
        element={
          <UserLayout>
            <MomentorRecap />
          </UserLayout>
        }
      />
    </Routes>
  )
}

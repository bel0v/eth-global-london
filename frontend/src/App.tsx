import { AppRoutes } from './app-routes'
import { Header } from './components/header'
import { StickyMenu } from './components/sticky-menu'
import { GlobalStyles } from './global-styles'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <main>
        <Header />
        <AppRoutes />
        <StickyMenu />
      </main>
    </Router>
  )
}

export default App

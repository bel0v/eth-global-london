import { AppRoutes } from './app-routes'
import { Header } from './components/header'
import { GlobalStyles } from './global-styles'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <main>
        <Header />
        <AppRoutes />
      </main>
    </Router>
  )
}

export default App

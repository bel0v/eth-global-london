import { AppRoutes } from './app-routes'
import { GlobalStyles } from './global-styles'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppRoutes />
    </Router>
  )
}

export default App

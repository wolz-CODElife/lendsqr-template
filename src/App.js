import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Sidebar from './layouts/Sidebar'
import PagesRoutes from './routes/Routes'

const App = () => {
  const route = document.location.pathname

  return (
    <Router>
      {route !== "/" &&
        <Navbar />
      }
      {route !== "/" &&
        <Sidebar route={route} />
      }
      <PagesRoutes />
    </Router>
  )
}

export default App

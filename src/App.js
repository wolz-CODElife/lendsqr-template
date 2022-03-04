import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Sidebar from './layouts/Sidebar'
import PagesRoutes from './routes/Routes'

const App = () => {
  const route = document.location.pathname
  const [openSidebar, setOpenSidebar] = useState(false)

  const toggleSidebar = (e) => {
    e.preventDefault()
    setOpenSidebar(!openSidebar)
  }
  return (
    <Router>
      {route !== "/" &&
        <Navbar toggleSidebar={toggleSidebar} openSidebar={openSidebar}  />
      }
      {route !== "/" &&
        <Sidebar route={route} openSidebar={openSidebar} />
      }
      <PagesRoutes />
    </Router>
  )
}

export default App

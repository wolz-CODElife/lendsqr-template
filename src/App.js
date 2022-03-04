import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
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
      <BodyContainer>
        {route !== "/" &&
          <Sidebar route={route} />
        }
        <PagesRoutes />
      </BodyContainer>
    </Router>
  )
}

export default App

const BodyContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-left: -270px;
  }
`
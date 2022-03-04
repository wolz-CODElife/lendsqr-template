import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Login from '../pages/Login'
import UserDetails from '../pages/UserDetails'
import Users from '../pages/Users'

const PagesRoutes = () => {
    return (
        <PageContainer>
            <Routes>
                <Route path='/' element={<Login />} /> 
                <Route path='/users' element={<Users />} /> 
                <Route path='/users/:id' exact element={<UserDetails />} /> 
            </Routes>
        </PageContainer>
    )
}

export default PagesRoutes

const PageContainer = styled.div`
    margin: 0px;
    margin-left: 283px;
    padding: 0px;

    @media (max-width: 768px) {
        margin-left: 0px;
    }
`
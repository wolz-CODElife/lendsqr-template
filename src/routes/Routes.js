import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import UserDetails from '../pages/UserDetails'
import Users from '../pages/Users'

const PagesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} /> 
            <Route path='/users' element={<Users />} /> 
            <Route path='/users/:id' exact element={<UserDetails />} /> 
        </Routes>
    )
}

export default PagesRoutes
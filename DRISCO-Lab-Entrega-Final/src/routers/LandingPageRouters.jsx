import { Routes, Route } from 'react-router-dom'
import { LandingPage, Login, AllProjectsScreen, AddProjectScreen } from '../pages'
import { PrivateRoute } from './PrivateRoute'

export function LandingPageRouters() {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<LandingPage />}
                />
                <Route
                    path='/login'
                    element={<Login />}
                />
                <Route
                    path='/all-projects-screen'
                    element={<AllProjectsScreen />}
                />
                <Route path='/add-project-screen' element={
                    <PrivateRoute>
                        <AddProjectScreen/>
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}
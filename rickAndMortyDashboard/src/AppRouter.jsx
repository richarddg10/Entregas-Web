import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./auth/pages/LoginPage"
import { DashboardPage } from "./auth/pages/DashboardPage"
import { ItemDetailPage } from "./auth/pages/ItemDetailPage"
import { PrivateRoute } from "./auth/routes/PrivateRoute"

export function AppRouter() {
    return(
        <main>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <DashboardPage/>
                    </PrivateRoute>
                } />
                <Route path="/item_detail/:id" element={<ItemDetailPage />} />
            </Routes>
        </main>
    )
}
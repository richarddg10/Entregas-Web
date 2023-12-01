import { Routes, Route } from 'react-router-dom'
import { LandingPageRouters } from './routers/LandingPageRouters'

export function AppRouters () {
    return (
      <>
        <main>
            <Routes>
                <Route
                  path='/*'
                  element={<LandingPageRouters />}
                />
            </Routes>
        </main>
      </>
    )
  }
  
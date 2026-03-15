import type { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ComingSoon from '../../features/marketing/ui/pages/ComingSoon'
import HomePage from '../../features/marketing/ui/pages/HomePage'
import LoginPage from '../../features/auth/ui/pages/LoginPage'
import RegisterPage from '../../features/auth/ui/pages/RegisterPage'
import Dashboard from '../../features/dashboard/ui/Dashboard.tsx'

const hasAuthToken = () => {
  const localToken = window.localStorage.getItem('routa_access_token')
  const sessionToken = window.sessionStorage.getItem('routa_access_token')
  return Boolean(localToken || sessionToken)
}

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  if (!hasAuthToken()) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
)

export default AppRouter

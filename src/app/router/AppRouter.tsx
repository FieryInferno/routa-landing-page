import type { ReactNode } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import ComingSoon from '../../features/marketing/ui/pages/ComingSoon'
import HomePage from '../../features/marketing/ui/pages/HomePage'
import LoginPage from '../../features/auth/ui/pages/LoginPage'
import RegisterPage from '../../features/auth/ui/pages/RegisterPage'
import Dashboard from '../../features/dashboard/ui/Dashboard.tsx'
import StyleGuidePage from '../../features/style-guide/ui/pages/StyleGuide.tsx'

type RouteAccess = 'public' | 'protected' | 'shared'

interface RouteConfig {
  path: string
  element: ReactNode
  access: RouteAccess
}

const hasAuthToken = () => {
  const localToken = window.localStorage.getItem('routa_access_token')
  const sessionToken = window.sessionStorage.getItem('routa_access_token')
  return Boolean(localToken || sessionToken)
}

const ProtectedRouteLayout = () => {
  if (!hasAuthToken()) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

const PublicOnlyRouteLayout = () => {
  if (hasAuthToken()) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

const routeConfigs: RouteConfig[] = [
  { path: '/', element: <ComingSoon />, access: 'public' },
  { path: '/home', element: <HomePage />, access: 'public' },
  { path: '/login', element: <LoginPage />, access: 'public' },
  { path: '/register', element: <RegisterPage />, access: 'public' },
  { path: '/dashboard', element: <Dashboard />, access: 'protected' },
  { path: '/202603170659-style-guide', element: <StyleGuidePage />, access: 'shared' },
]

const publicRoutes = routeConfigs.filter((route) => route.access === 'public')
const protectedRoutes = routeConfigs.filter((route) => route.access === 'protected')
const sharedRoutes = routeConfigs.filter((route) => route.access === 'shared')

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {sharedRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route element={<PublicOnlyRouteLayout />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<ProtectedRouteLayout />}>
        {protectedRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRouter

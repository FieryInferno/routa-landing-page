import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { navigationConfig, type NavigationItem } from '../../shared/config/navigation'
const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'))

const hasAuthToken = () => {
  const localToken = window.localStorage.getItem('routa_access_token')
  const sessionToken = window.sessionStorage.getItem('routa_access_token')
  return Boolean(localToken || sessionToken)
}

const ProtectedRouteLayout = () => {
  if (!hasAuthToken()) {
    return <Navigate to="/login" replace />
  }

  return (
    <Suspense fallback={null}>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </Suspense>
  )
}

const PublicOnlyRouteLayout = () => {
  if (hasAuthToken()) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

const publicRoutes = navigationConfig.filter((route) => route.access === 'public')
const protectedRoutes = navigationConfig.filter((route) => route.access === 'protected')
const sharedRoutes = navigationConfig.filter((route) => route.access === 'shared')

const createRouteElement = (route: NavigationItem) => {
  const Component = route.element

  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  )
}

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {sharedRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={createRouteElement(route)} />
      ))}
      <Route element={<PublicOnlyRouteLayout />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={createRouteElement(route)} />
        ))}
      </Route>
      <Route element={<ProtectedRouteLayout />}>
        {protectedRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={createRouteElement(route)} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRouter

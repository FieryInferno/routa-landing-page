import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

export type RouteAccess = 'public' | 'protected' | 'shared'

type RouteComponent = LazyExoticComponent<ComponentType<object>>

export interface NavigationItem {
  path: string
  label: string
  element: RouteComponent
  access: RouteAccess
  icon?: string
  includeInSidebar?: boolean
}

const ComingSoonPage = lazy(() => import('../../features/marketing/ui/pages/ComingSoon'))
const HomePage = lazy(() => import('../../features/marketing/ui/pages/HomePage'))
const LoginPage = lazy(() => import('../../features/auth/ui/pages/LoginPage'))
const RegisterPage = lazy(() => import('../../features/auth/ui/pages/RegisterPage'))
const DashboardPage = lazy(() => import('../../features/dashboard/ui/Dashboard.tsx'))
const GeneratePage = lazy(() => import('../../features/generate/ui/Generate'))
const StyleGuidePage = lazy(() => import('../../features/style-guide/ui/pages/StyleGuide.tsx'))

export const navigationConfig: NavigationItem[] = [
  { path: '/', label: 'Coming Soon', element: ComingSoonPage, access: 'public' },
  { path: '/home', label: 'Home', element: HomePage, access: 'shared' },
  { path: '/login', label: 'Login', element: LoginPage, access: 'public' },
  { path: '/register', label: 'Register', element: RegisterPage, access: 'public' },
  {
    path: '/dashboard',
    label: 'Dashboard',
    element: DashboardPage,
    access: 'protected',
    icon: 'dashboard',
    includeInSidebar: true,
  },
  {
    path: '/generate',
    label: 'Generate Roadmap',
    element: GeneratePage,
    access: 'protected',
    icon: 'generate-roadmap',
    includeInSidebar: true,
  },
  //   { label: 'My Roadmaps', isActive: false, icon: 'my-roadmaps' },
  //   { label: 'Progress', isActive: false, icon: 'progress' },
  //   { label: 'Lainnya', isActive: false, icon: 'more' },
  {
    path: '/202603170659-style-guide',
    label: 'Style Guide',
    element: StyleGuidePage,
    access: 'shared',
  },
]

export const sidebarNavItems = navigationConfig.filter(
  (item) => item.access === 'protected' && item.includeInSidebar !== false && Boolean(item.icon)
)

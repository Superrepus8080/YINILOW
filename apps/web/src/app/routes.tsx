import { Navigate, Route, Routes } from 'react-router-dom'
import { App as AppShell } from './App'
import { FashionHomePage } from '../features/fashion-home/FashionHomePage'
import { HomeElectronicsPage } from '../features/home-electronics/HomeElectronicsPage'
import { PlaceholderPage } from '../features/placeholder/PlaceholderPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/fashion" replace />} />
        <Route path="fashion" element={<FashionHomePage />} />
        <Route path="fashion/*" element={<PlaceholderPage world="fashion" />} />
        <Route path="home" element={<HomeElectronicsPage />} />
        <Route path="home/*" element={<PlaceholderPage world="home" />} />
      </Route>
    </Routes>
  )
}

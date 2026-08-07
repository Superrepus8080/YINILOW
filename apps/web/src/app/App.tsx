import { Outlet } from 'react-router-dom'
import { AppHeader } from '../shared/components/AppHeader'
import { SiteFooter } from '../shared/components/SiteFooter'
import './App.css'

export function App() {
  return (
    <div className="app-shell">
      <AppHeader />
      <main className="app-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

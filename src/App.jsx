import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SubmitJob from './pages/SubmitJob'
import Guide from './pages/Guide'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <BrowserRouter>
      <Navbar dark={dark} onToggleTheme={toggle} />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/submit-job" element={<SubmitJob />} />
        <Route path="/guide"      element={<Guide />} />
      </Routes>
    </BrowserRouter>
  )
}

import { lazy, Suspense } from 'react'
import './App.css'
import Loader from './components/Loader.jsx'

const LazyDashboard = lazy(() => import('./components/Dashboard'))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <LazyDashboard />
    </Suspense>
  )
}

export default App

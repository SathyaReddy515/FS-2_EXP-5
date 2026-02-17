import { lazy, Suspense } from 'react'
import './App.css'

// Lazy load Dashboard component
const LazyDashboard = lazy(() => import('./components/Dashboard.jsx'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <LazyDashboard />
      </Suspense>
    </div>
  )
}

export default App

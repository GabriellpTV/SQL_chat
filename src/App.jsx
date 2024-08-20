import Home from './pages/Home'
import RoutesApp from './routes/RoutesApp'
import { AuthProvider } from './contexts/auth'

export default function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )
}
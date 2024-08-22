import Home from './pages/Home'
import RoutesApp from './routes/RoutesApp'
import { AuthProvider } from './contexts/auth'
import { ContactsProvider } from './contexts/contacts'

export default function App() {
  return (
    <AuthProvider>
      <ContactsProvider>
        <RoutesApp />
      </ContactsProvider>
    </AuthProvider>
  )
}
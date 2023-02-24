import Chat from './components/chat/Chat'
import Layout from './components/layout/Layout'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Login from './components/login/Login'
import Loading from './components/loading/Loading'

function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) return <Loading loading={loading} />

  if (!user) return <Login />

  return (
    <Layout>
      <Chat />
    </Layout>
  )
}

export default App

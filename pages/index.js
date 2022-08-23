import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import UserDashboard from '../components/UserDashboard'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { currentUser } = useAuth()

  return (
    < >
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard/>}
    </>
  )
}

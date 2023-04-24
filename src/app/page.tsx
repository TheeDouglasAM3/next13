import Increment from '@/components/Increment'
import { cookies, headers } from 'next/headers'
import Link from 'next/link'

export const metadata = {
  title: 'Home teste',
}

export default async function Home() {
  const userCookies = cookies()
  const userHeaders = headers()

  // revalidate
  const response = await fetch('https://api.github.com/users/theedouglasam3', {
    next: {
      revalidate: 30,
    },
  })

  // SSR
  // const response = await fetch('https://api.github.com/users/theedouglasam3', {
  //   cache: 'no-store'
  // })

  const user = await response.json()

  return (
    <div>
      <Link href="/dashboard">Dashboard</Link> <br />
      <Link href="/signin">Signin</Link> <br />
      <Link href="/dashboard/repos">Repos</Link> <br />
      <h1>Home</h1>
      <Increment />
      <h3>user</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h3>cookies</h3>
      <pre>{JSON.stringify(userCookies, null, 2)}</pre>
      <h3>headers</h3>
      <pre>{JSON.stringify(userHeaders, null, 2)}</pre>
    </div>
  )
}

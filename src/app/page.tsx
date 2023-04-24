import Link from 'next/link'

export default async function Home() {
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
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/signin">Signin</Link>
    </div>
  )
}

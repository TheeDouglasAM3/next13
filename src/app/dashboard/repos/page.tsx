'use client'
import Repos from '@/components/Repos'
import User from '@/components/User'
import Link from 'next/link'
import { Suspense, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default async function ReposPage() {
  const { refresh } = useRouter()

  useEffect(() => {
    refresh()
  }, [])

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Dashboard / Repos</h1>
      {/* @ts-expect-error Async Server Component */}
      <User />
      <Suspense fallback={<p>Carregando repositórios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repos />
      </Suspense>
    </div>
  )
}

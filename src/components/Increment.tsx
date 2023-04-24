'use client'
import { useState } from 'react'

export default function Increment() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Count: {count}</h2>
      <button type="button" onClick={() => setCount((state) => state + 1)}>
        Incrementar
      </button>
    </div>
  )
}

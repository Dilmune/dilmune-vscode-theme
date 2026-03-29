import { useState, useEffect, type FC } from 'react'

// Theme showcase — exercises every major syntax token
interface Config<T extends string = string> {
  readonly name: T
  timeout: number
  enabled: boolean
}

type Status = 'idle' | 'loading' | 'error'

const MAX_RETRIES = 3
const API_URL = `https://api.example.com/v2`

async function fetchData<T>(url: string, retries = MAX_RETRIES): Promise<T> {
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url)
    if (res.ok) return res.json() as Promise<T>
    console.warn(`Attempt ${i + 1} failed — retrying`)
  }
  throw new Error(`Failed after ${retries} attempts`)
}

/** Dashboard component — renders config status */
export const Dashboard: FC<{ configs: Config[] }> = ({ configs }) => {
  const [status, setStatus] = useState<Status>('idle')
  const active = configs.filter((c) => c.enabled)
  const names = active.map((c) => c.name)

  useEffect(() => {
    setStatus('loading')
    fetchData(API_URL).catch(() => setStatus('error'))
  }, [])

  return (
    <section className="p-4">
      <h1>Dashboard ({active.length}/{configs.length})</h1>
      <ul>
        {names.map((n) => (
          <li key={n}>{n} — {status}</li>
        ))}
      </ul>
      {status === 'error' && <p className="text-red">Something went wrong.</p>}
    </section>
  )
}

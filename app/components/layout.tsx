"use client"

import { useEffect, useState } from "react"
import type { User } from "firebase/auth"
import { auth } from "@/lib/firebase"
import Navbar from "./navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar user={user} />
      <main className="container mx-auto px-4 py-8 pt-24">{children}</main>
    </div>
  )
}


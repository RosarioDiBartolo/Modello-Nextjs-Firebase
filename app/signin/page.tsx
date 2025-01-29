"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "@/lib/firebase"
import Layout from "../components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/")
    } catch (error) {
      setError("Failed to sign in. Please check your credentials.")
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.push("/")
    } catch (error) {
      setError("Failed to sign in with Google.")
    }
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Sign In</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white bg-opacity-20 text-white"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white bg-opacity-20 text-white"
            />
          </div>
          {error && <p className="text-red-300">{error}</p>}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <div className="mt-4">
          <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
            <FcGoogle className="mr-2" /> Sign in with Google
          </Button>
        </div>
      </motion.div>
    </Layout>
  )
}


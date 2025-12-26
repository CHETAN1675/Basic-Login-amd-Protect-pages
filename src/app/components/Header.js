"use client"

import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()
  const isLoggedIn = document.cookie.includes("auth=true")

  function logout() {
    document.cookie = "auth=; Max-Age=0; path=/"
    router.push("/login")
  }

  return (
    <header>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => router.push("/login")}>Login</button>
      )}
    </header>
  )
}

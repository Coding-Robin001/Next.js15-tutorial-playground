// app/layout.tsx
import React from 'react'

export default function Layout({
  children,
  notifications,
  revenue,
  user,
  login,
}: {
  children: React.ReactNode
  notifications: React.ReactNode
  revenue: React.ReactNode
  user: React.ReactNode
  login: React.ReactNode
}) {
  const isUserLoggedIn = true

  if (!isUserLoggedIn) {
    return <div className="p-4">{login}</div>
  }

  return (
    <div className="p-4">
      {children}
      <div className="flex mt-4 gap-4">
        <div className="flex flex-col gap-2">
          {user}
          {revenue}
        </div>
        <div className="flex-1">
          {notifications}
        </div>
      </div>
    </div>
  )
}

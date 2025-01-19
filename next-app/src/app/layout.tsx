import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DevDocs Explorer',
  description: 'Documentation made easy with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 
import './globals.css'
import { Inter } from 'next/font/google'
import styles from "./layout.module.css"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
            <h1>Demo Note</h1>
            <nav className={styles.nav}>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
            </nav>
        </header>
        <div className={styles.contents}>
          {children}
        </div>
      </body>
    </html>
  )
}

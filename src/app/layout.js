import AuthStateChangeProvider from '../../context/auth'
import { UserProvider } from '../../context/user'
import { ThemeProvider } from './components/dark-mode'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manchester United',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <AuthStateChangeProvider>
          <html lang="en">
            <body className={inter.className}>{children}</body>
          </html>
      </AuthStateChangeProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
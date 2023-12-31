import './globals.scss'
import { League_Spartan } from 'next/font/google'
// import { Header } from './components/calculator-header'

const leagueSpartan = League_Spartan({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={leagueSpartan.className}>{children}</body>
      {/* <Header stategy="beforeInteractive"/> */}
    </html>
  )
}

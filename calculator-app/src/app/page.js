'use client'
import { Button } from './components/calculator-button'
import { Screen } from './components/calculator-screen'
import { Header } from './components/calculator-header'
import { ThemeProvider } from './store'

export default function Home() {
  return (
    <div id='container'>
      <ThemeProvider>
        <Header strategy="beforeInteractive" />
        <Screen />
        <Button />
      </ThemeProvider>
    </div>
  )
}

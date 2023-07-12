import { Button } from './components/calculator-button'
import { Screen } from './components/calculator-screen'
import { Header } from './components/calculator-header'

export default function Home() {
  return (
    <div id='container'>
      <Header/>
      <Screen/>
      <Button />
    </div>
  )
}

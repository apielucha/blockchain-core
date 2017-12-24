import Blockchain from './components/Blockchain'
import * as dotenv from 'dotenv'

class App {
  init(): void {
    dotenv.config()
  }

  run(): void {
    const blockchain: Blockchain = new Blockchain()
    blockchain.firstBlock()
  }
}

export default App

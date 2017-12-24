import { Block, BlockBuilder } from './Block'

class Blockchain {
  constructor() {
    console.log('INFO: [src/components/Blockchain.ts]: new blockchain created')
  }

  firstBlock() {
    console.log('INFO: [src/components/Blockchain.ts]: add first block')
    
    const block: Block = new BlockBuilder()
      .withId(1)
      .withTimestamp(123456)
      .withPreviousHash('ThisIsAHash118')
      .withData('First block data')
      .build()

    block.display()
  }
}

export default Blockchain

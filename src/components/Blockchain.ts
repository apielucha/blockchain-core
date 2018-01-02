import { Block, BlockBuilder } from './Block'

class Blockchain {
  private chain: Block[]

  constructor() {
    console.log('INFO: [src/components/Blockchain.ts]: new blockchain created')

    this.chain = []
    this.addBlock(new BlockBuilder()
      .withId(0)
      .withTimestamp(Math.round(Date.now() / 1000))
      .withPreviousHash('0')
      .withData('Block 0 data.')
      .build())
  }

  addBlock(block: Block): void {
    console.log('INFO: [src/components/Blockchain.ts]: add block ' + block.Id)

    this.chain.push(block)
    block.display()
  }

  getLastBlock(): Block {
    return this.chain[this.chain.length - 1]
  }

  populate(): void {
    for (let i = 1; i < 10; i++) {
      this.addBlock(new BlockBuilder()
        .withId(i)
        .withTimestamp(Math.round(Date.now() / 1000))
        .withPreviousHash(this.getLastBlock().Hash)
        .withData('Block ' + i + ' data.')
        .build())
    }
  }
}

export default Blockchain

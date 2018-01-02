import * as Crypto from 'crypto'

// BLOCK: defines a block of the blockchain

class Block {
  private id: number
  private timestamp: number
  private previousHash: string
  private data: string
  private hash: string

  constructor(builder: BlockBuilder) {
    this.id = builder.Id
    this.timestamp = builder.Timestamp
    this.previousHash = builder.PreviousHash
    this.data = builder.Data

    this.hash = this.hashBlock()
  }

  get Id(): number { return this.id }
  get Hash(): string { return this.hash }

  display(): void {
    console.log(
      `\nID: ${this.id}\nTimestamp: ${this.timestamp}` +
      `\nPrevious hash: ${this.previousHash}\nData: ${this.data}` +
      `\nHash: ${this.hash}\n`
    )
  }

  hashBlock(): string {
    return Crypto
      .createHash('sha256')
      .update(this.id + this.timestamp + this.previousHash + this.data)
      .digest('base64');
  }
}



// BLOCKBUILDER: used to easily build a block

class BlockBuilder {
  private id: number
  private timestamp: number
  private previousHash: string
  private data: string

  get Id(): number { return this.id }
  get Timestamp(): number { return this.timestamp }
  get PreviousHash(): string { return this.previousHash }
  get Data(): string { return this.data }

  withId(id: number): BlockBuilder {
    this.id = id
    return this
  }

  withTimestamp(timestamp: number): BlockBuilder {
    this.timestamp = timestamp
    return this
  }

  withPreviousHash(previousHash: string): BlockBuilder {
    this.previousHash = previousHash
    return this
  }

  withData(data: string): BlockBuilder {
    this.data = data
    return this
  }

  build(): Block {
    return new Block(this)
  }
}



// Export both classes
export { Block, BlockBuilder }

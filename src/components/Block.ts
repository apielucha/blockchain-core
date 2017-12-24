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
  }

  display(): void {
    console.log(
      `\nID: ${this.id}\nTimestamp: ${this.timestamp}` +
      `\nPrevious hash: ${this.previousHash}\nData: ${this.data}`
    )
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

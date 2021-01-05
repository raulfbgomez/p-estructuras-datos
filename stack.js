class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}


class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) {
      this.bottom = null
      this.top = null
      return this
    } else {
      let last = this.top.next
      this.top = last
      this.length--
      return this
    }
  }
}

const myStack = new Stack()
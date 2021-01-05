class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }
  // Eliminar el elemento que este al frente
  dequeue() {
    if (this.length === 0) {
      this.first = null
      this.last = null
    } else if (this.length > 0) {
      const first = this.first.next
      this.first = first
      this.length--
    }
    return this
  }
}

const myQueue = new Queue()
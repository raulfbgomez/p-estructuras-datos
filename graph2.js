class Graph {
  constructor() {
    this.nodes = 0
    this.adjacentList = {}
  }
  // Agregar nodos (vertices)
  addVertex(node) {
    this.adjacentList[node] = []
    this.nodes++
  }
  // conexiones
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
  }
}

const myGraph = new Graph()
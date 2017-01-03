
class Graph {
  constructor(v, e) {
    this.numVertices = v;
    this.numEdges = e;
    this.vertices = Array(v);
    this.verticesInit();
  }

  verticesInit() {
    for (var i = 0; i < this.numVertices; i++) {
      this.vertices[i] = []
    }
  }

  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }

  adjacentVertices(v) {
    return this.vertices[v]
  }

  degree(v) {
    return this.vertices[v].length;
  }

  maxDegree() {
    return Math.max(...this.vertices.map((arr, index) => this.degree(index)));
  }

  averageDegree() {
    const degrees = this.vertices.map((arr, index) => this.degree(index));
    return degrees.reduce((a, b) => a + b) / degrees.length;
  }
}

module.exports = Graph;

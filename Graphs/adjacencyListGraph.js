class Graph {
  constructor(v, e) {
    this.numVertices = v;
    this.numEdges = e;
    this.vertices = Array(v);
    this.verticesInit();
  }

  // initialize each vertex in verticies array with another array to house connections
  verticesInit() {
    for (let i = 0; i < this.numVertices; i++) {
      this.vertices[i] = [];
    }
  }

  // add edges to each corresponding vertex
  // make sure to add the connection to both vetices
  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }

  // returns the connections to specific vertex
  adjacentVertices(v) {
    return this.vertices[v];
  }

  // the number of connections to a specific vertex
  degree(v) {
    return this.vertices[v].length;
  }

  // the furthest connection
  maxDegree() {
    return Math.max(...this.vertices.map((arr, index) => this.degree(index)));
  }

  // average connection distance
  averageDegree() {
    const degrees = this.vertices.map((arr, index) => this.degree(index));
    return degrees.reduce((a, b) => a + b) / degrees.length;
  }
}

module.exports = Graph;

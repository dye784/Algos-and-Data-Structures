const Graph = require('./adjacencyListGraph');

class DepthFirstSearch {
  constructor(graph) {
    this.marked = Array(graph.numVertices);
    this.edgeTo = Array(graph.numVertices);
    this.markedInit();
    this.components = Array(graph.numVertices);
    this.componentId = 0;
  }

  markedInit() {
    for (var i = 0; i < this.marked.length; i++) {
      this.marked[i] = false
    }
  }

  dfs(graph, vertex) {
    this.marked[vertex] = true;
    this.components[vertex] = this.componentId;
    const adjacent = graph.adjacentVertices(vertex);
    adjacent.forEach(w => {
      console.log(w)
      if (!this.marked[w]) {
        this.dfs(graph, w);
      }
      this.edgeTo[w] = vertex;
    })
  }

  hasPathTo(vertex) {
    return this.marked[vertex]
  }

  path(v, w) {
    if (!this.hasPathTo(v)) return null;

    let directions = w.toString();

    while (this.edgeTo[w] !== v) {
      // console.log('THIS.EDGETO W', this.edgeTo[w])
      directions += ' --> ' + this.edgeTo[w].toString()
      w = this.edgeTo[w]
    }

    directions += ' --> ' + v.toString();

    return directions;
  }

  connectedComponents(graph) {
    for (let i = 0; i < graph.numVertices; i++) {
      if (!this.marked[i]) {
        this.dfs(graph, i);
        this.componentId++;
      }
    }
  }

}

let x = new Graph(9, 6);
// console.log(x.vertices);
x.addEdge(1, 2);
x.addEdge(1, 0);
x.addEdge(2, 3);
x.addEdge(3, 4);
x.addEdge(5, 6);
x.addEdge(7, 8);
// console.log(x)

let search = new DepthFirstSearch(x);
// console.log('CLASS', search)
search.connectedComponents(x);
console.log(search)
console.log(search.marked);
console.log(search.edgeTo);
console.log(search.components);
console.log(search.path(0, 4));

module.exports = DepthFirstSearch;

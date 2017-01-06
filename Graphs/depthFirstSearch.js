
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

module.exports = DepthFirstSearch;

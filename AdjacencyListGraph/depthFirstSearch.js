 class DepthFirstSearch {
  constructor(graph) {
    this.marked = Array(graph.numVertices);
    this.edgeTo = Array(graph.numEdges);
    this.markedInit();
    this.components = Array(graph.numVertices);
    this.componentId = 0;
    this.graph = graph;
  }

  markedInit() {
    for (var i = 0; i < this.marked.length; i++) {
      this.marked[i] = false
    }
  }

  search(vertex) {
    this.marked[vertex] = true;
    this.components[vertex] = this.componentId;
    for (let w in this.graph.adjacentVertices(vertex)) {
      if (!this.marked[w]) {
        this.search(w);
      }
      this.edgeTo[w] = vertex;
    }
  }

  hasPathTo(vertex) {
    return this.marked[vertex]
  }

  path(v, w) {
    if (!this.hasPathTo(v)) return null;

    let directions = w.toString();

    while (this.edgeTo[w] !== v) {
      console.log(this.edgeTo)
      directions += ' --> ' + this.edgeTo[w].toString()
      w = this.edgeTo[w]
    }

    directions += ' --> ' + v.toString();

    return directions;
  }

  connectedComponents() {
    for (let i = 0; i < this.graph.vertices.length; i++) {
      if (!this.marked[i]) {
        this.search(i);
        this.componentId++;
      }
    }
  }

}

module.exports = DepthFirstSearch;
